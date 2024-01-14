import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, defaultOption, selected, onSelectedChange, name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const parentRef = useRef(null);
  const handleClickOutside = (event) => {
    if (parentRef.current && !parentRef.current.contains(event.target)) {
      // Clicked outside the dropdown, close it
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const renderedOptions = options
  .filter((item) => item.label.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => a.label.localeCompare(b.label))
  .map(option => {
    // if (option?.value === selected?.value) {
    //   return null;
    // }

    return (
      <div
        key={option.value}
        className="text-black block px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
        role="menuitem"
        tabIndex={-1}
        onClick={() => {onSelectedChange(option); toggleDropdown();}}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="relative inline-block text-left w-full mx-1.5" ref={parentRef}>
      <button
        className="inline-flex w-full justify-start items-center rounded-sm bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-ellipsis overflow-hidden border"
        onClick={toggleDropdown}
        type="button"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        id="menu-button"
      >
        <div
          className="inline-flex w-full h-5 gap-1.5 justify-start items-start bg-transparent text-sm font-semibold text-black overflow-hidden flex-nowrap"
        >
          {selected?.label || name}
        </div>
        <svg width="16" className={`${isDropdownOpen && 'rotate-180'} transition-transform`} height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.05932 8.92489L1.06403 2.07313C0.356831 1.2649 0.930803 0 2.00475 0H13.9953C15.0693 0 15.6433 1.2649 14.9361 2.07313L8.94076 8.92489C8.44275 9.49405 7.55734 9.49405 7.05932 8.92489Z" fill="#005689" />
        </svg>
      </button>
      {
        <div
          className={`absolute  ${isDropdownOpen?'max-h-60':'h-0'} transition-all right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {/* <div className="flex items-center p-4 py-3 space-x-2 bg-neutral-10 w-full border-b border-gray-500">
            <input
              className="w-full outline-none text-sm opacity-80 bg-white"
              placeholder="Cari Kelas..."
              value={filter}
              onChange={handleChange}
            ></input>
          </div> */}
          <div className="py-1" role="none"
          >
            {/* <div className="text-primary-main block px-4 py-2 text-sm cursor-pointer hover:bg-primary-main hover:text-white"
              role="menuitem"
              tabIndex={-1}
              onClick={() => onSelectedChange(defaultOption)}
            >
              {defaultOption.label}
            </div> */}
            {renderedOptions}
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;