'use client';

import Link from 'next/link';
import { Button, Heading } from '@/components/ui';
import { UserProfile } from '@/components';
import Select from 'react-select';
import * as RadixSelect from '@radix-ui/react-select';
import { useState } from 'react';

const profileList = [
  { profileImage: "/images/planner-1.jpg", userName: "Event Planner 1", role: "Professional Event Planner" },
  { profileImage: "/images/planner-2.jpg", userName: "Event Planner 2", role: "Professional Event Planner" },
  { profileImage: "/images/planner-3.jpg", userName: "Event Planner 3", role: "Professional Event Planner" },
];

const plannerTypes = [
  { value: 'wedding', label: 'Wedding Planner' },
  { value: 'corporate', label: 'Corporate Event Planner' },
  { value: 'party', label: 'Party Planner' },
  { value: 'conference', label: 'Conference Planner' },
  { value: 'social', label: 'Social Event Planner' },
];

const eventTimingOptions = [
  { value: 'within1month', label: 'Within 1 Month' },
  { value: 'within3months', label: 'Within 3 Months' },
  { value: 'within6months', label: 'Within 6 Months' },
  { value: 'within1year', label: 'Within 1 Year' },
  { value: 'morethan1year', label: 'More than 1 Year' },
];

const resourceOptions = [
  { value: 'venue', label: 'Venue' },
  { value: 'catering', label: 'Catering' },
  { value: 'photography', label: 'Photography' },
  { value: 'music', label: 'Music/Entertainment' },
  { value: 'decor', label: 'Decor' },
];

export default function EventPlanningSection() {
  const [isEventPro, setIsEventPro] = useState(true);
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedResources, setSelectedResources] = useState([]);
  const [selectedPlannerType, setSelectedPlannerType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
  };

  const handleSearchClick = () => {
    // Implement search functionality
    console.log({
      isEventPro,
      selectedTiming,
      selectedResources,
      selectedPlannerType,
      zipCode,
    });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: '#E5E7EB',
      '&:hover': {
        borderColor: '#F97316',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F97316' : state.isFocused ? '#FED7AA' : 'white',
      color: state.isSelected ? 'white' : '#111827',
    }),
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="space-y-5">
            <Heading size="4xl" className="text-center">
              <span className="text-black-900_02">Event </span>
              <span className="text-deep_orange-500">planning</span>
              <span className="text-black-900_02">, made easier.</span>
            </Heading>
            <p className="text-xl text-gray-500 text-center">
              Find the perfect event planner or vendor for your next event
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg p-1 bg-gray-100">
              <Button
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${
                  isEventPro
                    ? 'bg-deep_orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setIsEventPro(true)}
              >
                HIRE an EVENT PRO
              </Button>
              <Button
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${
                  !isEventPro
                    ? 'bg-deep_orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setIsEventPro(false)}
              >
                FIND EVENT VENDOR(S)
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <Select
                value={selectedTiming}
                onChange={setSelectedTiming}
                options={eventTimingOptions}
                placeholder="When is your event?"
                styles={customStyles}
              />

              {isEventPro ? (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">
                    What Type of Event Planner Do You Need?
                  </label>
                  <RadixSelect.Root
                    value={selectedPlannerType}
                    onValueChange={setSelectedPlannerType}
                  >
                    <RadixSelect.Trigger className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-deep_orange-500 focus:border-deep_orange-500">
                      <RadixSelect.Value placeholder="Select a planner type" />
                      <RadixSelect.Icon className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        ▼
                      </RadixSelect.Icon>
                    </RadixSelect.Trigger>

                    <RadixSelect.Portal>
                      <RadixSelect.Content className="overflow-hidden bg-white rounded-md shadow-lg">
                        <RadixSelect.Viewport className="p-2">
                          {plannerTypes.map((type) => (
                            <RadixSelect.Item
                              key={type.value}
                              value={type.value}
                              className="relative flex items-center px-8 py-2 text-sm text-gray-900 cursor-default select-none hover:bg-deep_orange-50"
                            >
                              <RadixSelect.ItemText>{type.label}</RadixSelect.ItemText>
                              <RadixSelect.ItemIndicator className="absolute left-2">
                                ✓
                              </RadixSelect.ItemIndicator>
                            </RadixSelect.Item>
                          ))}
                        </RadixSelect.Viewport>
                      </RadixSelect.Content>
                    </RadixSelect.Portal>
                  </RadixSelect.Root>
                </div>
              ) : (
                <Select
                  isMulti
                  value={selectedResources}
                  onChange={setSelectedResources}
                  options={resourceOptions}
                  placeholder="What type of vendors do you need?"
                  styles={customStyles}
                />
              )}

              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="Enter ZIP code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-deep_orange-500 focus:border-deep_orange-500"
                  />
                </div>
                <Button
                  onClick={handleSearchClick}
                  className="px-6 py-2 bg-deep_orange-500 text-white rounded-md hover:bg-deep_orange-600 focus:outline-none focus:ring-2 focus:ring-deep_orange-500 focus:ring-offset-2"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          {isEventPro && (
            <div className="mt-12">
              <div className="text-center mb-8">
                <Heading size="3xl">
                  <span className="text-black-900_02">Featured </span>
                  <span className="text-deep_orange-500">Event Planners</span>
                </Heading>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profileList.map((profile, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <UserProfile {...profile} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
