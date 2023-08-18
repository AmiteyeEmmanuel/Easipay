import React from "react";
import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import ImageLight from "../assets/img/Home.jpg";
import ImageDark from "../assets/img/Home.jpg";
import { Input, Label, Button, Select } from "@windmill/react-ui";
import { useState } from "react";


var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  // const loginToApp = (e) => {
  //     e.preventDefault();

  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((userAuth) => {
  //         dispatch(login({
  //             email: userAuth.user.email,
  //             uid: userAuth.user.uid, 
  //             displayName: userAuth.user.displayName,
  //             profile: userAuth.user.photoURL,
  //         })
  //         );
  //     }).catch(error => alert(error.message))
  // };
  const initiateRegister = () => {
    setLoading(true);
      if(!email) {
          return alert("please enter your email!")
      }
      if (!password) {
          alert("Please enter a password!");
          return;
        }

  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((userAuth) => {
  //          const user = userAuth.user;
  //          updateProfile(user, {
  //             displayName: firstName,
  //           })
  //         .then(() => {
  //             dispatch(login({
  //                 email: userAuth.user.email,
  //                 uid: userAuth.user.uid, 
  //                 displayName: firstName,
  //             }));
  //         })
  //         .catch((err) =>{ 
        
  //           toast( err?.response?.data?.error?.message || 'An error occured please try again')
  //           console.log(err?.response?.data?.error?.message)})
  //         .finally(() => setLoading(false));
  //     })
  //     .catch(error => alert(error.message));    
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900  bg-white">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-off-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold italic text-gray-700 dark:text-gray-200">
                Register Now
              </h1>
              <Label>
                <span>First Name</span>
                <Input
                  className="mt-1"
                  onChange={e => setFirstName(e.target.value)}
                  name="first_name"
                  type="text"
                  placeholder="John"
                />
              </Label>
              <Label className="mt-4">
                <span>Last Name</span>
                <Input
                  className="mt-1"
                  onChange={e => setLastName(e.target.value)}
                  name="last_name"
                  type="text"
                  placeholder="Doe"
                />
              </Label>
              <Label className="mt-4">
                <span>Country</span>
                <Select onChange={e => setEmail(e.target.value)} name="country" className="mt-1">
                  {country_list.map((country) => (
                    <option>{country}</option>
                  ))}
                </Select>
              </Label>
              <Label className="mt-4">
                <span>Email</span>
                <Input
                  onChange={e => setEmail(e.target.value)}
                  className="mt-1"
                  name="email"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  onChange={e => setPassword(e.target.value)}
                  className="mt-1"
                  name="password"
                  placeholder="***************"
                  type="password"
                />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="***************"
                  type="password"
                  name='confirm_password'
                />
              </Label>

              <Button block className="mt-4" onClick={initiateRegister}>
                {loading ? "Loading..." : "Create account"}
              </Button>
              
              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-green dark:text-green hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
