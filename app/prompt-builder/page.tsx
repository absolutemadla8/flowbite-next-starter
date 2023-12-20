"use client"
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable prettier/prettier */
import { Datepicker, Alert, Button, Label, Textarea } from "flowbite-react";
import { SetStateAction, SetStateAction, SetStateAction, SetStateAction, SetStateAction, SetStateAction, SetStateAction, useState } from "react";

const PlanCreator = () => {
  const [crowd, setCrowd] = useState("Solo");
  const [guestNumber, setGuestNumber] = useState(1);
  const [tripType, setTripType] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [moodPreference, setMoodPreference] = useState("");
  const [activityPreferences, setActivityPreferences] = useState([]);
  const [mealPlanChecked, setMealPlanChecked] = useState(true);
  const [culinaryExperiencesChecked, setCulinaryExperiencesChecked] =
    useState(false);
  const [halalMealsChecked, setHalalMealsChecked] = useState(false);
  const [itineraryInstructions, setItineraryInstructions] = useState("");
  const [showItinerary, setShowItinerary] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const activityOptions = ["Shopping", "Adventure", "Cafe Hopping", "Trek"];


  const handleCrowdChange = (newCrowd: SetStateAction<string>) => {
    setCrowd(newCrowd);
    setGuestNumber(newCrowd === "Solo" || newCrowd === "Couple" ? 2 : 1);
    setTripType("");
  };

  const handleGuestNumberChange = (event: { target: { value: SetStateAction<number>; }; }) => setGuestNumber(event.target.value);
  const handleTripTypeChange = (event: { target: { value: SetStateAction<string>; }; }) => setTripType(event.target.value);
  const handleLocationChange = (event: { target: { value: SetStateAction<string>; }; }) => setLocation(event.target.value);
  const handleStartDateChange = (date: SetStateAction<string>) => setStartDate(date);
  const handleEndDateChange = (date: SetStateAction<string>) => setEndDate(date);
  const handleMoodPreferenceChange = (mood: SetStateAction<string>) => setMoodPreference(mood);
  const handleActivityPreferenceChange = (activity) => {
    if (activityPreferences.includes(activity)) {
      setActivityPreferences(activityPreferences.filter(a => a !== activity));
    } else {
      setActivityPreferences([...activityPreferences, activity]);
    }
  };
  const handleMealPlanChange = () => setMealPlanChecked(!mealPlanChecked);
  const handleCulinaryExperiencesChange = () =>
    setCulinaryExperiencesChecked(!culinaryExperiencesChecked);
  const handleHalalMealsChange = () => setHalalMealsChecked(!halalMealsChecked);

  const generateItineraryInstruction = () => {
    return `Please create a customized travel itinerary for a ${crowd} group consisting of ${guestNumber} guests. The trip is a ${tripType} and will take place in ${location}, from ${startDate} to ${endDate}. The itinerary should reflect the following preferences:
      - Mood: Focus on activities that align with the selected mood of ${moodPreference}.
      - Activities: Include ${activityPreferences.join(
        ", ",
      )} as key parts of the trip.
      ${
        mealPlanChecked ? " - Dining: Include restaurant recommendations, tailored to the group's dining preferences." : ""
      }
      ${
        culinaryExperiencesChecked ? " - Accommodation: Include hotel suggestions, appropriate for the group size and type." : ""
      }
      ${
        halalMealsChecked ? "- Experiences: Include unique local experiences. " : ""
      } unique local experiences.
      If an all-day plan is requested, provide a comprehensive schedule for each day. Otherwise, suggest flexible options for different times of the day. Ensure the itinerary is feasible, with consideration for travel time between locations and any specific user requirements or limitations.`;
  };

  const handleSubmit = () => {
    const instructions = generateItineraryInstruction();
    setItineraryInstructions(instructions);
    setShowItinerary(true);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(itineraryInstructions).then(
      () => {
        setAlert({ show: true, message: 'Itinerary instructions copied to clipboard! Now you may exit this window and paste the message on the message box', type: 'success' });
      },
      (err) => {
        console.error("Could not copy text: ", err);
        setAlert({ show: true, message: 'Failed to copy itinerary instructions.', type: 'error' });
      }
    );
  };

  const handleCreateNewPlan = () => {
    setCrowd("Solo");
    setGuestNumber(1);
    setTripType("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setMoodPreference("");
    setActivityPreferences([]);
    setMealPlanChecked(true);
    setCulinaryExperiencesChecked(false);
    setHalalMealsChecked(false);
    setShowItinerary(false);
  };

  return (
    <div className="w-[100vw] mx-auto max-w-md">
      {alert.show && (
      <Alert color={alert.type} onDismiss={() => setAlert({ ...alert, show: false })}>
        <span className="font-medium">{alert.type === 'success' ? 'Success!' : 'Error!'}</span> {alert.message}
      </Alert>
    )}
      {showItinerary ? (
        <div className="mt-6 rounded-lg bg-white p-4">
          <h2 className="mb-4 text-lg font-sans font-semibold">Your Itinerary Plan</h2>
          <div className="mb-4 rounded-lg bg-gray-100 p-4">
          <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your Prompt" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={8} value={itineraryInstructions} />
    </div>
          </div>
          <div className="flex flex-row gap-2">
          <Button onClick={handleCopyToClipboard} outline gradientDuoTone="cyanToBlue">
        Copy Prompt
      </Button>
      <Button onClick={handleCreateNewPlan} outline gradientDuoTone="greenToBlue">
        Create New Plan
      </Button>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
          <i className="fas fa-arrow-left"></i>
          <h1 className="text-lg font-sans font-semibold">Create Plan</h1>
          <i className="fas fa-ellipsis-h"></i>
        </div>
                    <div className="mb-4">
            <h2 className="mb-2 text-md font-sans font-semibold">Choose your Mood</h2>
            <div className="flex flex-wrap gap-2">
              {["🌳 Nature", "⛷️ Adventure", "🌅 Sunset", "🎉 Party"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`rounded-lg border ${
                    crowd === type
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300 bg-white"
                  } px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                  onClick={() => handleMoodPreferenceChange(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
        <h2 className="text-md font-sans font-semibold">Choose your Crowd</h2>
        <div className="mt-2 flex space-x-2">
          {['Solo', 'Couple', 'Friends', 'Family'].map((type) => (
            <button
              key={type}
              type="button"
              className={`mb-2 rounded-lg border ${crowd === type ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'} px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200`}
              onClick={() => handleCrowdChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Number of Guests */}
      {crowd !== 'Solo' && (
        <div className=" mb-4">
          <label
            htmlFor="guest-number"
            className="mb-2 block text-md font-sans font-semibold text-gray-900 dark:text-white"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="guest-number"
            value={guestNumber}
            onChange={handleGuestNumberChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            min={crowd === 'Couple' ? 2 : 1}
          />
        </div>
      )}

          {/* Location Input */}
          <div className="mb-4">
            <label
              htmlFor="location-input"
              className="mb-2 block text-md font-sans font-semibold"
            >
              Location
            </label>
            <input
              type="text"
              id="location-input"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          {/* Date Pickers */}
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
            <label
            htmlFor="guest-number"
            className="mb-2 block text-md font-sans font-semibold text-gray-900 dark:text-white"
          >
            Start Date
          </label>
              <Datepicker
                placeholder="Start Date"
                selected={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex-1">
            <label
            htmlFor="guest-number"
            className="mb-2 block text-md font-sans font-semibold text-gray-900 dark:text-white"
          >
            End Date
          </label>
              <Datepicker
                placeholder="End Date"
                selected={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <div className="mb-4">
      <h2 className="text-md font-sans font-semibold mb-2">Activity Preferences</h2>
      <div className="flex flex-wrap gap-3">
        {activityOptions.map((activity) => (
          <label key={activity} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 rounded"
              checked={activityPreferences.includes(activity)}
              onChange={() => handleActivityPreferenceChange(activity)}
            />
            <span className="ml-2 text-sm text-gray-700">{activity}</span>
          </label>
        ))}
      </div>
    </div>

          <div className="mb-4">
        <h2 className="text-md font-sans font-semibold mb-2">Trip Type</h2>
        <select
          id="trip-type"
          value={tripType}
          onChange={handleTripTypeChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        >
          <option value="">Select Trip Type</option>
          {crowd === 'Solo' && ['Break', 'Explore', 'Remote Work and Travel', 'Occasion'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
          {crowd === 'Couple' && ['Romantic Getaway', 'Occasion - Birthday', 'Anniversary', 'Others'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
          {/* Add more options for 'Friends' and 'Family' if needed */}
        </select>
      </div>

          

          {/* Checkboxes for Plan Options */}
          <div className="mb-4 flex flex-col gap-4">

            {/* Meal Plan Checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={mealPlanChecked}
                onChange={handleMealPlanChange}
                className="form-checkbox h-5 w-5 rounded text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">
                Include Restaurants
              </span>
            </label>

            {/* Culinary Experiences Checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={culinaryExperiencesChecked}
                onChange={handleCulinaryExperiencesChange}
                className="form-checkbox h-5 w-5 rounded text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Include Hotels</span>
            </label>

            {/* Halal Meals Checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={halalMealsChecked}
                onChange={handleHalalMealsChange}
                className="form-checkbox h-5 w-5 rounded text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">
                Include Experiences
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Generate Itinerary
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanCreator;
