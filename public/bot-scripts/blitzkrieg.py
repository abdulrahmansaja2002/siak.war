from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
import time

title = """
========================================================================================
     _______. __       ___       __  ___      ____    __    ____  ___      .______      
    /       ||  |     /   \     |  |/  /      \   \  /  \  /   / /   \     |   _  \     
   |   (----`|  |    /  ^  \    |  '  /   _____\   \/    \/   / /  ^  \    |  |_)  |    
    \   \    |  |   /  /_\  \   |    <   |______\            / /  /_\  \   |      /     
.----)   |   |  |  /  _____  \  |  .  \          \    /\    / /  _____  \  |  |\  \----.
|_______/    |__| /__/     \__\ |__|\__\          \__/  \__/ /__/     \__\ | _| `._____|
========================================================================== blitzkrieg.py
"""

def war(username, password):
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--ignore-ssl-errors')
    driver = webdriver.Chrome('chromedriver.exe', options=options)

    # use line below if you want more refresh in shorter time, might impact login time
    # maybe useful when your faculty goes to war on the same time as other faculty
    # driver.set_page_load_timeout(5)

    login(driver, username, password)

    matkul=[]
    with open('matkuls.txt') as file_inp:
        for line in file_inp:
            matkul.append(line.split(",")[0].strip())
    
    while True:
        try:
            driver.get("https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit")
            time.sleep(0.5)

            # Keep this up to date
            if ("Pesan untuk pembimbing akademis" in driver.page_source):
                break
            raise NoSuchElementException

        except NoSuchElementException:
            logout(driver)
            login(driver, username, password)

    while True:
        try:
            for kelas in matkul:
                try:
                    clicked=driver.find_element(By.XPATH,'//input[@value="{}"]'.format(kelas))
                    clicked.click()

                except NoSuchElementException:
                    continue

            driver.find_element(By.NAME, 'submit').click()

            if ("IRS berhasil tersimpan!" in driver.page_source and "Daftar IRS" in driver.page_source):
                break

            raise NoSuchElementException

        except NoSuchElementException:
            driver.get("https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit")

    print("Heil")
    driver.close()

def login(driver, username, password):
    while True:
        try:
            driver.get("https://academic.ui.ac.id/main/Authentication/")
            element = driver.find_element(By.ID, "u")
            element.send_keys(username)
            element = driver.find_element(By.NAME,"p")
            element.send_keys(password)
            element.send_keys(Keys.RETURN)

        except:
            if ("Logout Counter" in driver.page_source):
                break

            continue

        try:
            driver.get("https://academic.ui.ac.id/main/Welcome/Index")
            if ("Logout Counter" in driver.page_source):
                break

            raise Exception

        except:
            continue
        
def logout(driver):
    while True:
        try:
            driver.get("https://academic.ui.ac.id/main/Welcome/Index")
            driver.find_element(By.PARTIAL_LINK_TEXT,'Logout').click()

        except:
            try:
                driver.find_element(By.ID,"u")
                break

            except:
                continue
        try:
            driver.get("https://academic.ui.ac.id/main/Authentication/")
            driver.find_element(By.ID,"u")
            break

        except:
            continue
            

if __name__ == "__main__":
    print(title)
    uspass=[]
    with open('credentials.txt') as file_inp:
        for line in file_inp:
            uspass.append(line.strip())

    war(uspass[0],uspass[1])
    input("Tekan Enter untuk keluar!")