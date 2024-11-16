export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]


export const AI_PROMPT = "Give the answer strictly in json format only. No other text should be given as response. Generate a travel plan for Location: {location}, for {totalDays} days for {traveler} with a {budget} budget. Provide a list of hotels and itinerary in the following  format which must be of json type: 1. **Hotels (Array)**: - Each hotel should have: - hotelName: \"Hotel Name\" - hotelAddress: \"Hotel Address\" - price: \"Price per night\" - rating: \"Hotel rating\" - geoCoordinates: \"Latitude, Longitude\" - hotelImageUrl: \"URL for hotel image\" - description: \"Description of the hotel\" 2. **Itinerary (Array)**: - Each day should have: - day: \"Day {dayNumber}\" - plan (Array of places): - placeName: \"Place Name\" - placeDetails: \"Details about the place\" - placeImageUrl: \"URL for the place image\" - geoCoordinates: \"Latitude, Longitude\" - placeAddress: \"Address of the place\" - ticketPricing: \"Ticket price (if applicable)\" - timeToTravel: \"Time required to travel to the next place (in hours)\" - bestTimeToVisit: \"Recommended time to visit the place\" The data must be structured in JSON format for easy integration. Example: {\"hotels\": [{\"hotelName\": \"Hotel A\", \"hotelAddress\": \"Address A\", \"price\": \"$150\", \"rating\": \"4.5\", \"geoCoordinates\": \"34.0522,-118.2437\", \"hotelImageUrl\": \"https://image_url.com/hotel_a.jpg\", \"description\": \"A luxurious hotel with beautiful views.\"}, {\"hotelName\": \"Hotel B\", \"hotelAddress\": \"Address B\", \"price\": \"$200\", \"rating\": \"4.7\", \"geoCoordinates\": \"34.0522,-118.2438\", \"hotelImageUrl\": \"https://image_url.com/hotel_b.jpg\", \"description\": \"A modern hotel with excellent amenities.\"}], \"itinerary\": [{\"day\": \"Day 1\", \"plan\": [{\"placeName\": \"Place A\", \"placeDetails\": \"Details about Place A\", \"placeImageUrl\": \"https://image_url.com/place_a.jpg\", \"geoCoordinates\": \"34.0522,-118.2437\", \"placeAddress\": \"Address A\", \"ticketPricing\": \"$10\", \"timeToTravel\": \"1 hour\", \"bestTimeToVisit\": \"Morning\"}, {\"placeName\": \"Place B\", \"placeDetails\": \"Details about Place B\", \"placeImageUrl\": \"https://image_url.com/place_b.jpg\", \"geoCoordinates\": \"34.0522,-118.2438\", \"placeAddress\": \"Address B\", \"ticketPricing\": \"$15\", \"timeToTravel\": \"2 hours\", \"bestTimeToVisit\": \"Afternoon\"}]}, {\"day\": \"Day 2\", \"plan\": [{\"placeName\": \"Place C\", \"placeDetails\": \"Details about Place C\", \"placeImageUrl\": \"https://image_url.com/place_c.jpg\", \"geoCoordinates\": \"34.0522,-118.2439\", \"placeAddress\": \"Address C\", \"ticketPricing\": \"$20\", \"timeToTravel\": \"1.5 hours\", \"bestTimeToVisit\": \"Morning\"}]}]}";

