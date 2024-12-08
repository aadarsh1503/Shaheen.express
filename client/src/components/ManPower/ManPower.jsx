import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map1 from "./Map1.jpg";
import SummaryComponent from "./SummaryComponent";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import m2 from "./m2.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pickupIcon = new L.Icon({
  iconUrl: m2,
  iconSize: [56, 56],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const dropoffIcon = new L.Icon({
  iconUrl: m2,
  iconSize: [56, 56],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ManPower = () => {
  const [name, setName] = useState(""); // Name state
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); // State for date
  const [selectedTime, setSelectedTime] = useState(""); // State for time

  const showToast = (message, type) => {
    toast[type](message); // type can be 'error', 'success', etc.
  };
  const vehicles = [
    { id: 1, label: "Walker", icon: "🚶", charge: "Kwd 30" },
    { id: 2, label: "Rider", icon: "🏍️", charge: "Kwd 50" },
    { id: 3, label: "Private Car/Van Driver", icon: "🚘", charge: "Kwd 110" },
  ];

  const navigate = useNavigate();
  const manualAddresses = [
    { display_name: "Southern, Aáli, 746", lat: 26.1731, lon: 50.5577 },
    { display_name: "Southern, Aáli, 748", lat: 26.1745, lon: 50.5582 },
    { display_name: "Southern, Al Door, 965", lat: 26.1621, lon: 50.5492 },
    { display_name: "Southern, Algainah, 961", lat: 26.1557, lon: 50.5443 },
    { display_name: "Southern, Al Hajyat, 929", lat: 26.1593, lon: 50.5439 },
    { display_name: "Southern, Al Hajyat, 931", lat: 26.1601, lon: 50.5447 },
    { display_name: "Southern, Al Hajyat, 935", lat: 26.1615, lon: 50.5453 },
    { display_name: "Southern, Al Hajyat, 939", lat: 26.1629, lon: 50.5461 },
    { display_name: "Southern, Al Hunaniya, 901", lat: 26.1583, lon: 50.5409 },
    { display_name: "Southern, Al Hunaniya, 903", lat: 26.1597, lon: 50.5417 },
    { display_name: "Southern, Al Jaseera, 971", lat: 26.1653, lon: 50.5525 },
    { display_name: "Southern, Al Mamtala, 1099", lat: 26.1701, lon: 50.5547 },
    { display_name: "Southern, Al Mazrooeeah, 9", lat: 26.1685, lon: 50.5531 },
    { display_name: "Southern, Al Omar, 988", lat: 26.1700, lon: 50.5100 },
  { display_name: "Southern, Al Qarah, 983", lat: 26.1720, lon: 50.5150 },
  { display_name: "Southern, Al Qarah, 987", lat: 26.1730, lon: 50.5160 },
  { display_name: "Southern, Al Qareen, 967", lat: 26.1740, lon: 50.5170 },
  { display_name: "Southern, Al Rawdha, 906", lat: 26.1750, lon: 50.5180 },
  { display_name: "Southern, Al Rawdha, 930", lat: 26.1760, lon: 50.5190 },
  { display_name: "Southern, Al Riffah, 947", lat: 26.1770, lon: 50.5200 },
  { display_name: "Southern, Al Romaitha, 995", lat: 26.1780, lon: 50.5210 },
  { display_name: "Southern, Al Rumamin, 981", lat: 26.1790, lon: 50.5220 },
  { display_name: "Southern, Al Rumamin, 982", lat: 26.1800, lon: 50.5230 },
  { display_name: "Southern, Al Shabak, 989", lat: 26.1810, lon: 50.5240 },
  { display_name: "Southern, Askar, 951", lat: 26.1820, lon: 50.5250 },
  { display_name: "Southern, Awali, 945", lat: 26.1830, lon: 50.5260 },
  { display_name: "Southern, Awali, 946", lat: 26.1840, lon: 50.5270 },
  { display_name: "Southern, Belaj Al Jazair, 1063", lat: 26.1850, lon: 50.5280 },
  { display_name: "Southern, Belaj Al Jazair, 1064", lat: 26.1860, lon: 50.5290 },
  { display_name: "Southern, Bu Kuwarah, 913", lat: 26.1870, lon: 50.5300 },
  { display_name: "Southern, Bu Kuwarah, 917", lat: 26.1880, lon: 50.5310 },
  { "display_name": "Southern, Bu Kuwarah, 919", "lat": 26.2047, "lon": 50.5200 },
  { "display_name": "Southern, Bu Kuwarah, 921", "lat": 26.2047, "lon": 50.5200 },
  { "display_name": "Southern, Bu Kuwarah, 923", "lat": 26.2047, "lon": 50.5200 },
  { "display_name": "Southern, Bu Kuwarah, 925", "lat": 26.2047, "lon": 50.5200 },
  { "display_name": "Southern, Bu Kuwarah, 927", "lat": 26.2047, "lon": 50.5200 },
  { "display_name": "Southern, Dar Kulaib, 1048", "lat": 26.0686, "lon": 50.5039 },
  { "display_name": "Southern, Durrat Al Bahrain, 999", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, East Riffa, 905", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, East Riffa, 907", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, East Riffa, 909", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, East Riffa, 911", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Hafeera, 959", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Hawrat Sanad, 645", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Hidd Al Jamal, 973", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Hlaitan, 1067", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Horat Anaqa, 1062", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Isa Town, 801", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Isa Town, 802", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 803", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 804", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 805", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 806", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 807", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 808", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 809", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 810", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 812", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 813", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 814", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 840", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Isa Town, 841", "lat": 26.1694, "lon": 50.5522 },
  { "display_name": "Southern, Jari Al Shaikh, 920", "lat": 26.1433, "lon": 50.5300 },
  { "display_name": "Southern, Jari Al Shaikh, 924", "lat": 26.1433, "lon": 50.5300 },
  { "display_name": "Southern, Jari Al Shaikh, 926", "lat": 26.1433, "lon": 50.5300 },
  { "display_name": "Southern, Jaw, 957", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Jaw, 960", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Jazaer Beach, 1061", "lat": 26.1700, "lon": 50.5100 },
  { "display_name": "Southern, Juzur Al Dar, 613", "lat": 26.1792, "lon": 50.5424 },
  { "display_name": "Southern, Lhassay, 948", "lat": 26.1781, "lon": 50.5016 },
  { "display_name": "Southern, Maameer, 635", "lat": 26.1685, "lon": 50.4968 },
  { "display_name": "Southern, Maameer, 636", "lat": 26.1686, "lon": 50.4969 },
  { "display_name": "Southern, Mamlahat Al Mamtala, 1069", "lat": 26.1623, "lon": 50.5381 },
  { "display_name": "Southern, Mamlahat Al Mamtala, 1070", "lat": 26.1624, "lon": 50.5382 },
  { "display_name": "Southern, Mazraa, 953", "lat": 26.1753, "lon": 50.4791 },
  { "display_name": "Southern, New districts, 1101", "lat": 26.1603, "lon": 50.5385 },
  { "display_name": "Southern, New districts, 1102", "lat": 26.1604, "lon": 50.5386 },
  { "display_name": "Southern, New districts, 1103", "lat": 26.1605, "lon": 50.5387 },
  { "display_name": "Southern, New districts, 1104", "lat": 26.1606, "lon": 50.5388 },
  { "display_name": "Southern, New districts, 1106", "lat": 26.1608, "lon": 50.5390 },
  { "display_name": "Southern, New districts, 1107", "lat": 26.1609, "lon": 50.5391 },
  { "display_name": "Southern, New districts, 1108", "lat": 26.1610, "lon": 50.5392 },
  { "display_name": "Southern, New districts, 1110", "lat": 26.1611, "lon": 50.5393 },
  { "display_name": "Southern, New districts, 1111", "lat": 26.1612, "lon": 50.5394 },
  { "display_name": "Southern, New districts, 1112", "lat": 26.1613, "lon": 50.5395 },
  { "display_name": "Southern, New districts, 1113", "lat": 26.1614, "lon": 50.5396 },
  { "display_name": "Southern, New districts, 918", "lat": 26.1602, "lon": 50.5384 },
  { "display_name": "Southern, New districts, 932", "lat": 26.1603, "lon": 50.5385 },
  { "display_name": "Southern, New districts, 944", "lat": 26.1604, "lon": 50.5386 },
  { "display_name": "Southern, New districts, 950", "lat": 26.1605, "lon": 50.5387 },
  { "display_name": "Southern, New districts, 955", "lat": 26.1606, "lon": 50.5388 },
  { "display_name": "Southern, Nuwaydirat, 643", "lat": 26.1435, "lon": 50.5128 },
  { "display_name": "Southern, Nuwaydirat, 646", "lat": 26.1436, "lon": 50.5129 },
  { "display_name": "Southern, Ras Abu Jarjor, 954", "lat": 26.1703, "lon": 50.5020 },
  { "display_name": "Southern, Ras Hayan, 958", "lat": 26.1714, "lon": 50.5011 },
  { "display_name": "Southern, Ras Zuwaid, 952", "lat": 26.1725, "lon": 50.4999 },
  { "display_name": "Southern, Riffa / Albuhair, 914", "lat": 26.1745, "lon": 50.5141 },
  { "display_name": "Southern, Riffa / Albuhair, 915", "lat": 26.1746, "lon": 50.5142 },
  { "display_name": "Southern, Riffa / Albuhair, 916", "lat": 26.1747, "lon": 50.5143 },
{ "display_name": "Southern, Riffa / Albuhair, 922", "lat": 26.1750, "lon": 50.5145 },
{ "display_name": "Southern, Riffa / Albuhair, 933", "lat": 26.1753, "lon": 50.5147 },
{ "display_name": "Southern, Riffa / Albuhair, 934", "lat": 26.1754, "lon": 50.5148 },
{ "display_name": "Southern, Riffa / Albuhair, 937", "lat": 26.1755, "lon": 50.5150 },
{ "display_name": "Southern, Riffa / Albuhair, 941", "lat": 26.1756, "lon": 50.5152 },
{ "display_name": "Southern, Sukhair, 976", "lat": 26.1658, "lon": 50.4993 },
{ "display_name": "Southern, Sukhair, 985", "lat": 26.1659, "lon": 50.4994 },
{ "display_name": "Southern, Swayfra, 942", "lat": 26.1571, "lon": 50.4968 },
{ "display_name": "Southern, Trafi, 998", "lat": 26.1667, "lon": 50.4976 },
{ "display_name": "Southern, Um Albaidh, 614", "lat": 26.1762, "lon": 50.5087 },
{ "display_name": "Southern, Um Albaidh, 615", "lat": 26.1763, "lon": 50.5088 },
{ "display_name": "Southern, Um Albaidh, 616", "lat": 26.1764, "lon": 50.5090 },
{ "display_name": "Southern, Um Jadir, 986", "lat": 26.1850, "lon": 50.5157 },
{ "display_name": "Southern, Umm Jidr Al Summan, 997", "lat": 26.1849, "lon": 50.5159 },
{ "display_name": "Southern, Wadi Ali, 1068", "lat": 26.1510, "lon": 50.5065 },
{ "display_name": "Southern, Wadi Al Sale, 928", "lat": 26.1492, "lon": 50.5072 },
{ "display_name": "Southern, West Riffa, 902", "lat": 26.1741, "lon": 50.5153 },
{ "display_name": "Southern, West Riffa, 904", "lat": 26.1742, "lon": 50.5155 },
{ "display_name": "Southern, West Riffa, 908", "lat": 26.1743, "lon": 50.5157 },
{ "display_name": "Southern, West Riffa, 910", "lat": 26.1744, "lon": 50.5159 },
{ "display_name": "Southern, West Riffa, 912", "lat": 26.1745, "lon": 50.5161 },
{ "display_name": "Southern, Zallaq, 1051", "lat": 26.1118, "lon": 50.5613 },
{ "display_name": "Southern, Zallaq, 1052", "lat": 26.1119, "lon": 50.5615 },
{ "display_name": "Southern, Zallaq, 1054", "lat": 26.1120, "lon": 50.5617 },
{ "display_name": "Southern, Zallaq, 1055", "lat": 26.1121, "lon": 50.5619 },
{ "display_name": "Southern, Zallaq, 1056", "lat": 26.1109, "lon": 50.5621 },
{ "display_name": "Southern, Zayed Town, 718", "lat": 26.1311, "lon": 50.5223 },
{ "display_name": "Southern, Zayed Town, 720", "lat": 26.1313, "lon": 50.5225 },
{ "display_name": "Northern, Aáli, 732", "lat": 26.1532, "lon": 50.5531 },
{ "display_name": "Northern, Aáli, 734", "lat": 26.1534, "lon": 50.5533 },
{ "display_name": "Northern, Aáli, 736", "lat": 26.1536, "lon": 50.5535 },
{ "display_name": "Northern, Aáli, 738", "lat": 26.1538, "lon": 50.5537 },
{ "display_name": "Northern, Aáli, 740", "lat": 26.1540, "lon": 50.5539 },
{ "display_name": "Northern, Aáli, 742", "lat": 26.1542, "lon": 50.5541 },
{ "display_name": "Northern, Aáli, 744", "lat": 26.1544, "lon": 50.5543 },
{ "display_name": "Northern, Abu Saiba'a, 469", "lat": 26.1855, "lon": 50.5254 },
{ "display_name": "Northern, Abu Saiba'a, 471", "lat": 26.1857, "lon": 50.5256 },
{ "display_name": "Northern, Abu Saiba'a, 473", "lat": 26.1859, "lon": 50.5258 },
{ "display_name": "Northern, Abu Saiba'a, 475", "lat": 26.1861, "lon": 50.5260 },
{ "display_name": "Northern, Al Hajar, 463", "lat": 26.1681, "lon": 50.5357 },
{ "display_name": "Northern, Al Hajar, 465", "lat": 26.1683, "lon": 50.5359 },
{ "display_name": "Northern, Al Jasra, 1001", "lat": 26.1546, "lon": 50.5203 },
{ "display_name": "Northern, Al Jasra, 1002", "lat": 26.1548, "lon": 50.5205 },
{ "display_name": "Northern, Al Jasra, 1003", "lat": 26.1550, "lon": 50.5207 },
{ "display_name": "Northern, Al Jasra, 1004", "lat": 26.1552, "lon": 50.5209 },
{ "display_name": "Northern, Al Jasra, 1006", "lat": 26.1554, "lon": 50.5211 },
{ "display_name": "Northern, Al Lawzi, 1016", "lat": 26.1263, "lon": 50.5765 },
{ "display_name": "Northern, Al Lawzi, 1018", "lat": 26.1265, "lon": 50.5767 },
{ "display_name": "Northern, Al Lawzi, 1020", "lat": 26.1267, "lon": 50.5769 },
{ "display_name": "Northern, Al Muhamadyia, 587", "lat": 26.2153, "lon": 50.5071 },
{ "display_name": "Northern, Al Shakhura, 477", "lat": 26.2201, "lon": 50.5184 },
{ "display_name": "Northern, Al Shakhura, 479", "lat": 26.2203, "lon": 50.5186 },
{ "display_name": "Northern, Al Shakhura, 481", "lat": 26.2205, "lon": 50.5188 },
{ "display_name": "Northern, Bani Jamra, 537", "lat": 26.1519, "lon": 50.5022 },
{ "display_name": "Northern, Bani Jamra, 539", "lat": 26.1521, "lon": 50.5024 },
{ "display_name": "Northern, Bani Jamra, 541", "lat": 26.1523, "lon": 50.5026 },
{ "display_name": "Northern, Bani Jamra, 543", "lat": 26.1525, "lon": 50.5028 },
{ "display_name": "Northern, Barbar, 518", "lat": 26.1579, "lon": 50.5511 },
{ "display_name": "Northern, Barbar, 520", "lat": 26.1581, "lon": 50.5513 },
{ "display_name": "Northern, Barbar, 522", "lat": 26.1583, "lon": 50.5515 },
{ "display_name": "Northern, Barbar, 524", "lat": 26.1585, "lon": 50.5517 },
{ "display_name": "Northern, Barbar, 526", "lat": 26.1577, "lon": 50.5519 },
{ "display_name": "Northern, Barbar, 528", "lat": 26.1579, "lon": 50.5521 },
{ "display_name": "Northern, Barbar, 530", "lat": 26.1581, "lon": 50.5523 },
{ "display_name": "Northern, Budaiya, 550", "lat": 26.1764, "lon": 50.5528 },
{ "display_name": "Northern, Budaiya, 552", "lat": 26.1766, "lon": 50.5530 },
{ "display_name": "Northern, Budaiya, 553", "lat": 26.1768, "lon": 50.5532 },
{ "display_name": "Northern, Budaiya, 555", "lat": 26.1770, "lon": 50.5534 },
{ "display_name": "Northern, Budaiya, 557", "lat": 26.1772, "lon": 50.5536 },
{ "display_name": "Northern, Budaiya, 559", "lat": 26.1774, "lon": 50.5538 },
{ "display_name": "Northern, Buqwa, 455", "lat": 26.1796, "lon": 50.5368 },
{ "display_name": "Northern, Buqwa, 457", "lat": 26.1798, "lon": 50.5370 },
{ "display_name": "Northern, Buri, 752", "lat": 26.2104, "lon": 50.5467 },
{ "display_name": "Northern, Buri, 754", "lat": 26.2106, "lon": 50.5469 },
{ "display_name": "Northern, Buri, 756", "lat": 26.2108, "lon": 50.5471 },
{ "display_name": "Northern, Buri, 758", "lat": 26.2110, "lon": 50.5473 },
{ "display_name": "Northern, Buri, 760", "lat": 26.2112, "lon": 50.5475 },
{ "display_name": "Northern, Buri, 762", "lat": 26.2114, "lon": 50.5477 },
{ "display_name": "Northern, Damistan, 1017", "lat": 26.2015, "lon": 50.5361 },
{ "display_name": "Northern, Damistan, 1019", "lat": 26.2017, "lon": 50.5363 },
{ "display_name": "Northern, Damistan, 1022", "lat": 26.2020, "lon": 50.5365 },
{ "display_name": "Northern, Dar Kulaib, 1046", "lat": 26.1827, "lon": 50.5188 },
{ "display_name": "Northern, Diraz, 536", "lat": 26.2118, "lon": 50.5324 },
{ "display_name": "Northern, Diraz, 538", "lat": 26.2120, "lon": 50.5326 },
{ "display_name": "Northern, Diraz, 540", "lat": 26.2122, "lon": 50.5328 },
{ "display_name": "Northern, Diraz, 542", "lat": 26.2124, "lon": 50.5330 },
{ "display_name": "Northern, Diraz, 544", "lat": 26.2126, "lon": 50.5332 },
{ "display_name": "Northern, Hamad Town, 1038", "lat": 26.2135, "lon": 50.5704 },
{ "display_name": "Northern, Hamad Town, 1203", "lat": 26.2137, "lon": 50.5706 },
{ "display_name": "Northern, Hamad Town, 1204", "lat": 26.2139, "lon": 50.5708 },
{ "display_name": "Northern, Hamad Town, 1205", "lat": 26.2141, "lon": 50.5710 },
{ "display_name": "Northern, Hamad Town, 1206", "lat": 26.2143, "lon": 50.5712 },
{ "display_name": "Northern, Hamad Town, 1207", "lat": 26.2145, "lon": 50.5714 },
{ "display_name": "Northern, Hamad Town, 1208", "lat": 26.2147, "lon": 50.5716 },
{ "display_name": "Northern, Hamad Town, 1209", "lat": 26.2149, "lon": 50.5718 },
{ "display_name": "Northern, Hamad Town, 1210", "lat": 26.2151, "lon": 50.5720 },
{ "display_name": "Northern, Hamad Town, 1211", "lat": 26.2153, "lon": 50.5722 },
{ "display_name": "Northern, Hamad Town, 1212", "lat": 26.2155, "lon": 50.5724 },
{ "display_name": "Northern, Hamad Town, 1213", "lat": 26.2157, "lon": 50.5726 },
{ "display_name": "Northern, Hamad Town, 1214", "lat": 26.2159, "lon": 50.5728 },
{ "display_name": "Northern, Hamad Town, 1215", "lat": 26.2161, "lon": 50.5730 },
{ "display_name": "Northern, Hamad Town, 1216", "lat": 26.2163, "lon": 50.5732 },
{ "display_name": "Northern, Hamala, 1009", "lat": 26.1705, "lon": 50.6010 },
{ "display_name": "Northern, Hamala, 1010", "lat": 26.1707, "lon": 50.6012 },
{ "display_name": "Northern, Hamala, 1012", "lat": 26.1710, "lon": 50.6014 },
{ "display_name": "Northern, Hamala, 1014", "lat": 26.1712, "lon": 50.6016 },
{ "display_name": "Northern, Hillat AbdulSaleh, 444", "lat": 26.1571, "lon": 50.5584 },
{ "display_name": "Northern, Hoarat Aáli, 714", "lat": 26.1875, "lon": 50.5527 },
{ "display_name": "Northern, Hoarat Aáli, 730", "lat": 26.1882, "lon": 50.5532 },
{ "display_name": "Northern, Jabalt Hibshi, 431", "lat": 26.1867, "lon": 50.5586 },
{ "display_name": "Northern, Jabalt Hibshi, 433", "lat": 26.1870, "lon": 50.5588 },
{ "display_name": "Northern, Jabalt Hibshi, 435", "lat": 26.1872, "lon": 50.5590 },
{ "display_name": "Northern, Janabiya, 561", "lat": 26.2061, "lon": 50.5678 },
{ "display_name": "Northern, Janabiya, 565", "lat": 26.2064, "lon": 50.5680 },
{ "display_name": "Northern, Janabiya, 569", "lat": 26.2067, "lon": 50.5682 },
{ "display_name": "Northern, Janabiya, 571", "lat": 26.2069, "lon": 50.5684 },
{ "display_name": "Northern, Janabiya, 575", "lat": 26.2072, "lon": 50.5686 },
{ "display_name": "Northern, Janabiya, 577", "lat": 26.2074, "lon": 50.5688 },
{ "display_name": "Northern, Janabiya, 579", "lat": 26.2076, "lon": 50.5690 },
{ "display_name": "Northern, Jannusan, 502", "lat": 26.1898, "lon": 50.5355 },
{ "display_name": "Northern, Jannusan, 504", "lat": 26.1900, "lon": 50.5357 },
{ "display_name": "Northern, Jannusan, 506", "lat": 26.1902, "lon": 50.5359 },
{ "display_name": "Northern, Jannusan, 508", "lat": 26.1904, "lon": 50.5361 },
{ "display_name": "Northern, Jedah, 591", "lat": 26.1535, "lon": 50.5090 },
{ "display_name": "Northern, Jind Al Haj, 514", "lat": 26.1841, "lon": 50.5325 },
{ "display_name": "Northern, Karana, 454", "lat": 26.1472, "lon": 50.5373 },
{ "display_name": "Northern, Karana, 456", "lat": 26.1475, "lon": 50.5375 },
{ "display_name": "Northern, Karana, 458", "lat": 26.1477, "lon": 50.5377 },
{ "display_name": "Northern, Karana, 460", "lat": 26.1480, "lon": 50.5379 },
{ "display_name": "Northern, Karzakan, 1025", "lat": 26.1985, "lon": 50.5390 },
{ "display_name": "Northern, Karzakan, 1026", "lat": 26.1987, "lon": 50.5392 },
{ "display_name": "Northern, Karzakan, 1027", "lat": 26.1989, "lon": 50.5394 },
{ "display_name": "Northern, Karzakan, 1028", "lat": 26.1991, "lon": 50.5396 },
{ "display_name": "Northern, King Fahad Causway, 1095", "lat": 26.2360, "lon": 50.6335 },
{ "display_name": "Northern, Magaba, 505", "lat": 26.2115, "lon": 50.5617 },
{ "display_name": "Northern, Magaba, 507", "lat": 26.2117, "lon": 50.5619 },
{ "display_name": "Northern, Magaba, 509", "lat": 26.2119, "lon": 50.5621 },
{ "display_name": "Northern, Magaba, 513", "lat": 26.2121, "lon": 50.5623 },
{ "display_name": "Northern, Malkiya, 1032", "lat": 26.2212, "lon": 50.6095 },
{ "display_name": "Northern, Malkiya, 1033", "lat": 26.2214, "lon": 50.6097 },
{ "display_name": "Northern, Malkiya, 1034", "lat": 26.2216, "lon": 50.6099 },
{ "display_name": "Northern, Maqsha, 450", "lat": 26.1519, "lon": 50.5553 },
{ "display_name": "Northern, Markh, 529", "lat": 26.2147, "lon": 50.5295 },
{ "display_name": "Northern, Markh, 531", "lat": 26.2149, "lon": 50.5297 },
{ "display_name": "Northern, Markh, 533", "lat": 26.2151, "lon": 50.5299 },
{ "display_name": "Northern, New districts, 1218", "lat": 26.1889, "lon": 50.5324 },
{ "display_name": "Northern, New districts, 515", "lat": 26.1887, "lon": 50.5326 },
{ "display_name": "Northern, North City, 532", "lat": 26.2123, "lon": 50.5333 },
{ "display_name": "Northern, North City, 534", "lat": 26.2125, "lon": 50.5335 },
{ "display_name": "Northern, North City, 535", "lat": 26.2127, "lon": 50.5337 },
{ "display_name": "Northern, Northern City, 580", "lat": 26.2355, "lon": 50.5967 },
{ "display_name": "Northern, Northern City, 581", "lat": 26.2357, "lon": 50.5969 },
{ "display_name": "Northern, Northern City, 582", "lat": 26.2359, "lon": 50.5971 },
{ "display_name": "Northern, Northern City, 583", "lat": 26.2361, "lon": 50.5973 },
{ "display_name": "Northern, Northern City, 584", "lat": 26.2363, "lon": 50.5975 },
{ "display_name": "Northern, Northern City, 585", "lat": 26.2365, "lon": 50.5977 },
{ "display_name": "Northern, Northern City, 586", "lat": 26.2367, "lon": 50.5979 },
{ "display_name": "Northern, Northern City, 588", "lat": 26.2369, "lon": 50.5981 },
{ "display_name": "Northern, Northern City, 589", "lat": 26.2371, "lon": 50.5983 },
{ "display_name": "Northern, Northern City, 590", "lat": 26.2373, "lon": 50.5985 },
{ "display_name": "Northern, Northern Sehla, 439", "lat": 26.2021, "lon": 50.5383 },
{ "display_name": "Northern, Northern Sehla, 441", "lat": 26.2023, "lon": 50.5385 },
{ "display_name": "Northern, Qadam, 447", "lat": 26.1927, "lon": 50.5371 },
{ "display_name": "Northern, Qadam, 449", "lat": 26.1929, "lon": 50.5373 },
{ "display_name": "Northern, Qadam, 453", "lat": 26.1931, "lon": 50.5375 },
{ "display_name": "Northern, Quraya, 545", "lat": 26.2025, "lon": 50.5387 },
{ "display_name": "Northern, Quraya, 547", "lat": 26.2027, "lon": 50.5389 },
{ "display_name": "Northern, Quraya, 549", "lat": 26.2029, "lon": 50.5391 },
{ "display_name": "Northern, Quraya, 551", "lat": 26.2031, "lon": 50.5393 },
{ "display_name": "Northern, Saar, 517", "lat": 26.1983, "lon": 50.5201 },
{ "display_name": "Northern, Saar, 521", "lat": 26.1985, "lon": 50.5203 },
{ "display_name": "Northern, Saar, 523", "lat": 26.1987, "lon": 50.5205 },
{ "display_name": "Northern, Saar, 525", "lat": 26.1989, "lon": 50.5207 },
{ "display_name": "Northern, Saar, 527", "lat": 26.1991, "lon": 50.5209 },
{ "display_name": "Northern, Sadaq, 1037", "lat": 26.2193, "lon": 50.6025 },
{ "display_name": "Northern, Safriya, 1041", "lat": 26.2214, "lon": 50.6112 },
{ "display_name": "Northern, Salmabad, 702", "lat": 26.2095, "lon": 50.5423 },
{ "display_name": "Northern, Salmabad, 704", "lat": 26.2097, "lon": 50.5425 },
{ "display_name": "Northern, Salmabad, 706", "lat": 26.2099, "lon": 50.5427 },
{ "display_name": "Northern, Salmabad, 708", "lat": 26.2101, "lon": 50.5429 },
{ "display_name": "Northern, Salmabad, 712", "lat": 26.2103, "lon": 50.5431 },
{ "display_name": "Northern, Shahrakan, 1042", "lat": 26.2262, "lon": 50.5972 },
{ "display_name": "Northern, Shahrakan, 1044", "lat": 26.2264, "lon": 50.5974 },
{ "display_name": "Northern, Um Al Naasan, 1089", "lat": 26.2217, "lon": 50.5486 },
{ "display_name": "Capital, Abu Al Aish, 607", "lat": 26.2267, "lon": 50.5868 },
{ "display_name": "Capital, Abu Buham, 367", "lat": 26.2174, "lon": 50.5769 },
{ "display_name": "Capital, Adhari, 366", "lat": 26.2152, "lon": 50.5751 },
{ "display_name": "Capital, Adhari, 369", "lat": 26.2154, "lon": 50.5753 },
{ "display_name": "Capital, Adliya, 327", "lat": 26.2148, "lon": 50.5852 },
{ "display_name": "Capital, Adliya, 336", "lat": 26.2150, "lon": 50.5854 },
{ "display_name": "Capital, Al Akr Al Sharqi, 623", "lat": 26.2170, "lon": 50.5781 },
{ "display_name": "Capital, Al Belad Al Qadeem, 361", "lat": 26.2203, "lon": 50.5777 },
{ "display_name": "Capital, Al Belad Al Qadeem, 362", "lat": 26.2205, "lon": 50.5779 },
{ "display_name": "Capital, Al Belad Al Qadeem, 363", "lat": 26.2207, "lon": 50.5781 },
{ "display_name": "Capital, Al Belad Al Qadeem, 364", "lat": 26.2209, "lon": 50.5783 },
{ "display_name": "Capital, Alcornish, 322", "lat": 26.2135, "lon": 50.5910 },
{ "display_name": "Capital, Al Fatih, 324", "lat": 26.2142, "lon": 50.5912 },
{ "display_name": "Capital, Al Guraifa, 342", "lat": 26.2126, "lon": 50.5908 },
{ "display_name": "Capital, Al Hamriya, 611", "lat": 26.2165, "lon": 50.5827 },
{ "display_name": "Capital, Al Khamiss, 365", "lat": 26.2156, "lon": 50.5763 },
{ "display_name": "Capital, Al Kharjiya, 606", "lat": 26.2263, "lon": 50.5854 },
{ "display_name": "Capital, Alnaim, 303", "lat": 26.2208, "lon": 50.5819 },
{ "display_name": "Capital, Alnaim, 314", "lat": 26.2209, "lon": 50.5821 },
{ "display_name": "Capital, Al Nasfa, 733", "lat": 26.2345, "lon": 50.6012 },
{ "display_name": "Capital, Alqalla, 438", "lat": 26.2231, "lon": 50.5855 },
{ "display_name": "Capital, Alsalmaniya, 309", "lat": 26.2182, "lon": 50.5893 },
{ "display_name": "Capital, Alsalmaniya, 310", "lat": 26.2184, "lon": 50.5895 },
{ "display_name": "Capital, Alsalmaniya, 311", "lat": 26.2186, "lon": 50.5897 },
{ "display_name": "Capital, Alsalmaniya, 329", "lat": 26.2188, "lon": 50.5899 },
{ "display_name": "Capital, Alseef District, 428", "lat": 26.2185, "lon": 50.5831 },
{ "display_name": "Capital, Alseef District, 436", "lat": 26.2187, "lon": 50.5833 },
{ "display_name": "Capital, Al Suqayyah, 328", "lat": 26.2189, "lon": 50.5806 },
{ "display_name": "Capital, Alsuwayfia, 313", "lat": 26.2203, "lon": 50.5813 },
{ "display_name": "Capital, Alsuwayfia, 351", "lat": 26.2206, "lon": 50.5815 },
{ "display_name": "Capital, Alsuwayfia, 353", "lat": 26.2208, "lon": 50.5817 },
{ "display_name": "Capital, Alwajeha Albhariya, 344", "lat": 26.2137, "lon": 50.5859 },
{ "display_name": "Capital, Alwajeha Albhariya, 346", "lat": 26.2140, "lon": 50.5861 },
{ "display_name": "Capital, Bu Asheera, 332", "lat": 26.2195, "lon": 50.5891 },
{ "display_name": "Capital, Bu Ghasal, 373", "lat": 26.2251, "lon": 50.5844 },
{ "display_name": "Capital, Bu Ghazal, 330", "lat": 26.2193, "lon": 50.5894 },
{ "display_name": "Capital, Bu Ghazal, 331", "lat": 26.2194, "lon": 50.5895 },
{ "display_name": "Capital, Burhama, 354", "lat": 26.2139, "lon": 50.5857 },
{ "display_name": "Capital, Burhama, 357", "lat": 26.2142, "lon": 50.5859 },
{ "display_name": "Capital, Commercial Area, 315", "lat": 26.2185, "lon": 50.5911 },
{ "display_name": "Capital, Commercial Area, 316", "lat": 26.2187, "lon": 50.5913 },
{ "display_name": "Capital, Daih, 412", "lat": 26.2282, "lon": 50.5826 },
{ "display_name": "Capital, Daih, 414", "lat": 26.2284, "lon": 50.5828 },
{ "display_name": "Capital, Diplomatic Area, 317", "lat": 26.2138, "lon": 50.5916 },
{ "display_name": "Capital, Gudaibiya, 307", "lat": 26.2231, "lon": 50.5843 },
{ "display_name": "Capital, Gudaibiya, 308", "lat": 26.2233, "lon": 50.5845 },
{ "display_name": "Capital, Gudaibiya, 321", "lat": 26.2235, "lon": 50.5847 },
{ "display_name": "Capital, Gudaibiya, 325", "lat": 26.2237, "lon": 50.5849 },
{ "display_name": "Capital, Gudaibiya, 326", "lat": 26.2239, "lon": 50.5851 },
{ "display_name": "Capital, Gudaibiya, 338", "lat": 26.2241, "lon": 50.5853 },
{ "display_name": "Capital, Hoora, 318", "lat": 26.2221, "lon": 50.5863 },
{ "display_name": "Capital, Hoora, 319", "lat": 26.2223, "lon": 50.5865 },
{ "display_name": "Capital, Hoora, 320", "lat": 26.2225, "lon": 50.5867 },
{ "display_name": "Capital, Isa Town, 815", "lat": 26.2110, "lon": 50.6092 },
{ "display_name": "Capital, Isa Town, 816", "lat": 26.2112, "lon": 50.6094 },
{ "display_name": "Capital, Jid Ali, 721", "lat": 26.2290, "lon": 50.6042 },
{ "display_name": "Capital, Jidhafs, 419", "lat": 26.2214, "lon": 50.6049 },
{ "display_name": "Capital, Jidhafs, 421", "lat": 26.2216, "lon": 50.6051 },
{ "display_name": "Capital, Jidhafs, 422", "lat": 26.2218, "lon": 50.6053 },
{ "display_name": "Capital, Jidhafs, 423", "lat": 26.2220, "lon": 50.6055 },
{ "display_name": "Capital, Jidhafs, 424", "lat": 26.2222, "lon": 50.6057 },
{ "display_name": "Capital, Jidhafs, 425", "lat": 26.2224, "lon": 50.6059 },
{ "display_name": "Capital, Jidhafs, 426", "lat": 26.2226, "lon": 50.6061 },
{ "display_name": "Capital, Juffair, 340", "lat": 26.2273, "lon": 50.6040 },
{ "display_name": "Capital, Juffair, 341", "lat": 26.2275, "lon": 50.6042 },
{ "display_name": "Capital, Jurdab, 729", "lat": 26.2156, "lon": 50.6124 },
{ "display_name": "Capital, Karbabad, 430", "lat": 26.2181, "lon": 50.5848 },
{ "display_name": "Capital, Karbabad, 432", "lat": 26.2183, "lon": 50.5850 },
{ "display_name": "Capital, Karbabad, 434", "lat": 26.2185, "lon": 50.5852 },
{ "display_name": "Capital, Maameer, 633", "lat": 26.2041, "lon": 50.5743 },
{ "display_name": "Capital, Maameer, 634", "lat": 26.2043, "lon": 50.5745 },
{ "display_name": "Capital, Mahaza, 602", "lat": 26.2236, "lon": 50.5813 },
{ "display_name": "Capital, Mahaza, 603", "lat": 26.2238, "lon": 50.5815 },
{ "display_name": "Capital, Mahooz, 334", "lat": 26.2301, "lon": 50.5960 },
{ "display_name": "Capital, Manama Center, 323", "lat": 26.2212, "lon": 50.5846 },
{ "display_name": "Capital, Minaa Salman Industrial Area, 343", "lat": 26.2104, "lon": 50.6073 },
{ "display_name": "Capital, Murgoban, 605", "lat": 26.2174, "lon": 50.5795 },
{ "display_name": "Capital, Musala, 411", "lat": 26.2261, "lon": 50.5874 },
{ "display_name": "Capital, Musala, 413", "lat": 26.2263, "lon": 50.5876 },
{ "display_name": "Capital, Nahib Saleh, 380", "lat": 26.2244, "lon": 50.5899 },
{ "display_name": "Capital, Nahib Saleh, 381", "lat": 26.2246, "lon": 50.5901 },
{ "display_name": "Capital, Nahib Saleh, 382", "lat": 26.2248, "lon": 50.5903 },
{ "display_name": "Capital, Nurana, 592", "lat": 26.2234, "lon": 50.5900 },
{ "display_name": "Capital, Nuwaydirat, 644", "lat": 26.2222, "lon": 50.5912 },
{ "display_name": "Capital, Qarya, 604", "lat": 26.2197, "lon": 50.5889 },
{ "display_name": "Capital, Qufool, 312", "lat": 26.2169, "lon": 50.5942 },
{ "display_name": "Capital, Ras Ruman, 306", "lat": 26.2240, "lon": 50.5984 },
{ "display_name": "Capital, Salhiya, 356", "lat": 26.2238, "lon": 50.5855 },
{ "display_name": "Capital, Sanabis, 402", "lat": 26.2299, "lon": 50.5867 },
{ "display_name": "Capital, Sanabis, 404", "lat": 26.2301, "lon": 50.5869 },
{ "display_name": "Capital, Sanabis, 405", "lat": 26.2303, "lon": 50.5871 },
{ "display_name": "Capital, Sanabis, 406", "lat": 26.2305, "lon": 50.5873 },
{ "display_name": "Capital, Sanabis, 408", "lat": 26.2307, "lon": 50.5875 },
{ "display_name": "Capital, Sanabis, 410", "lat": 26.2309, "lon": 50.5877 },
{ "display_name": "Capital, Sanad, 743", "lat": 26.2201, "lon": 50.5731 },
{ "display_name": "Capital, Sanad, 745", "lat": 26.2203, "lon": 50.5733 },
{ "display_name": "Capital, Sitra Industrial Area, 601", "lat": 26.1979, "lon": 50.5866 },
{ "display_name": "Capital, Souq, 301", "lat": 26.2238, "lon": 50.5870 },
{ "display_name": "Capital, Souq, 302", "lat": 26.2240, "lon": 50.5872 },
{ "display_name": "Capital, Souq, 304", "lat": 26.2242, "lon": 50.5874 },
{ "display_name": "Capital, Souq, 305", "lat": 26.2244, "lon": 50.5876 },
{ "display_name": "Capital, Southern Sehla, 368", "lat": 26.2181, "lon": 50.5908 },
{ "display_name": "Capital, Sufala, 609", "lat": 26.2236, "lon": 50.5899 },
{ "display_name": "Capital, Tashan, 407", "lat": 26.2291, "lon": 50.5863 },
{ "display_name": "Capital, Tubli, 701", "lat": 26.2225, "lon": 50.5729 },
{ "display_name": "Capital, Tubli, 705", "lat": 26.2227, "lon": 50.5731 },
{ "display_name": "Capital, Tubli, 707", "lat": 26.2229, "lon": 50.5733 },
{ "display_name": "Capital, Tubli, 709", "lat": 26.2231, "lon": 50.5735 },
{ "display_name": "Capital, Tubli, 711", "lat": 26.2233, "lon": 50.5737 },
{ "display_name": "Capital, Um Albaidh, 610", "lat": 26.2183, "lon": 50.5821 },
{ "display_name": "Capital, Um Alhassam, 333", "lat": 26.2221, "lon": 50.5955 },
{ "display_name": "Capital, Um Alhassam, 335", "lat": 26.2223, "lon": 50.5957 },
{ "display_name": "Capital, Um Alhassam, 337", "lat": 26.2225, "lon": 50.5959 },
{ "display_name": "Capital, Um Alhassam, 339", "lat": 26.2227, "lon": 50.5961 },
{ "display_name": "Capital, Wadyan, 608", "lat": 26.2189, "lon": 50.5865 },
{ "display_name": "Capital, Western Aker, 624", "lat": 26.2209, "lon": 50.5912 },
{ "display_name": "Capital, Western Aker, 625", "lat": 26.2211, "lon": 50.5914 },
{ "display_name": "Capital, Western Aker, 626", "lat": 26.2213, "lon": 50.5916 },
{ "display_name": "Capital, Zinj, 358", "lat": 26.2154, "lon": 50.5945 },
{ "display_name": "Capital, Zinj, 359", "lat": 26.2156, "lon": 50.5947 },
{ "display_name": "Capital, Zinj, 360", "lat": 26.2158, "lon": 50.5949 },
{ "display_name": "Muharraq, Al Sayh, 228", "lat": 26.2750, "lon": 50.6241 },
{ "display_name": "Muharraq, Al Sayh, 229", "lat": 26.2752, "lon": 50.6243 },
{ "display_name": "Muharraq, Amwaj, 257", "lat": 26.2134, "lon": 50.6092 },
{ "display_name": "Muharraq, Amwaj, 258", "lat": 26.2136, "lon": 50.6094 },
{ "display_name": "Muharraq, Amwaj, 263", "lat": 26.2140, "lon": 50.6098 },
{ "display_name": "Muharraq, Amwaj, 264", "lat": 26.2142, "lon": 50.6100 },
{ "display_name": "Muharraq, Amwaj, 265", "lat": 26.2144, "lon": 50.6102 },
{ "display_name": "Muharraq, Amwaj, 266", "lat": 26.2146, "lon": 50.6104 },
{ "display_name": "Muharraq, Amwaj, 269", "lat": 26.2150, "lon": 50.6108 },
{ "display_name": "Muharraq, Arad, 240", "lat": 26.2454, "lon": 50.6076 },
{ "display_name": "Muharraq, Arad, 241", "lat": 26.2456, "lon": 50.6078 },
{ "display_name": "Muharraq, Arad, 242", "lat": 26.2458, "lon": 50.6080 },
{ "display_name": "Muharraq, Arad, 243", "lat": 26.2460, "lon": 50.6082 },
{ "display_name": "Muharraq, Arad, 244", "lat": 26.2462, "lon": 50.6084 },
{ "display_name": "Muharraq, Arad, 245", "lat": 26.2464, "lon": 50.6086 },
{ "display_name": "Muharraq, Arad, 246", "lat": 26.2466, "lon": 50.6088 },
{ "display_name": "Muharraq, Busaiteen, 221", "lat": 26.2284, "lon": 50.6015 },
{ "display_name": "Muharraq, Busaiteen, 222", "lat": 26.2286, "lon": 50.6017 },
{ "display_name": "Muharraq, Busaiteen, 223", "lat": 26.2288, "lon": 50.6019 },
{ "display_name": "Muharraq, Busaiteen, 225", "lat": 26.2290, "lon": 50.6021 },
{ "display_name": "Muharraq, Busaiteen, 226", "lat": 26.2292, "lon": 50.6023 },
{ "display_name": "Muharraq, Busaiteen, 227", "lat": 26.2294, "lon": 50.6025 },
{ "display_name": "Muharraq, Dair, 231", "lat": 26.2324, "lon": 50.6079 },
{ "display_name": "Muharraq, Dair, 232", "lat": 26.2326, "lon": 50.6081 },
{ "display_name": "Muharraq, Dair, 233", "lat": 26.2328, "lon": 50.6083 },
{ "display_name": "Muharraq, Galali, 251", "lat": 26.2530, "lon": 50.6151 },
{ "display_name": "Muharraq, Galali, 252", "lat": 26.2532, "lon": 50.6153 },
{ "display_name": "Muharraq, Galali, 253", "lat": 26.2534, "lon": 50.6155 },
{ "display_name": "Muharraq, Galali, 254", "lat": 26.2536, "lon": 50.6157 },
{ "display_name": "Muharraq, Galali, 255", "lat": 26.2538, "lon": 50.6159 },
{ "display_name": "Muharraq, Galali, 256", "lat": 26.2540, "lon": 50.6161 },
{ "display_name": "Muharraq, Halat Alnaim, 248", "lat": 26.2340, "lon": 50.6017 },
{ "display_name": "Muharraq, Halat Alsulta, 247", "lat": 26.2342, "lon": 50.6019 },
{ "display_name": "Muharraq, Hidd, 101", "lat": 26.2568, "lon": 50.5735 },
{ "display_name": "Muharraq, Hidd, 102", "lat": 26.2570, "lon": 50.5737 },
{ "display_name": "Muharraq, Hidd, 103", "lat": 26.2572, "lon": 50.5739 },
{ "display_name": "Muharraq, Hidd, 104", "lat": 26.2574, "lon": 50.5741 },
{ "display_name": "Muharraq, Hidd, 105", "lat": 26.2576, "lon": 50.5743 },
{ "display_name": "Muharraq, Hidd, 106", "lat": 26.2578, "lon": 50.5745 },
{ "display_name": "Muharraq, Hidd, 107", "lat": 26.2580, "lon": 50.5747 },
{ "display_name": "Muharraq, Hidd, 108", "lat": 26.2582, "lon": 50.5749 },
{ "display_name": "Muharraq, Hidd, 109", "lat": 26.2584, "lon": 50.5751 },
{ "display_name": "Muharraq, Hidd, 110", "lat": 26.2586, "lon": 50.5753 },
{ "display_name": "Muharraq, Hidd, 111", "lat": 26.2588, "lon": 50.5755 },
{ "display_name": "Muharraq, Hidd, 112", "lat": 26.2590, "lon": 50.5757 },
{ "display_name": "Muharraq, Hidd, 113", "lat": 26.2592, "lon": 50.5759 },
{ "display_name": "Muharraq, Hidd, 115", "lat": 26.2594, "lon": 50.5761 },
{ "display_name": "Muharraq, Hidd, 116", "lat": 26.2596, "lon": 50.5763 },
{ "display_name": "Muharraq, Hidd, 117", "lat": 26.2598, "lon": 50.5765 },
{ "display_name": "Muharraq, Hidd, 118", "lat": 26.2600, "lon": 50.5767 },
{ "display_name": "Muharraq, Hidd, 119", "lat": 26.2602, "lon": 50.5769 },
{ "display_name": "Muharraq, Hidd, 121", "lat": 26.2604, "lon": 50.5771 },
{ "display_name": "Muharraq, Hidd, 128", "lat": 26.2606, "lon": 50.5773 },
{ "display_name": "Muharraq, Muharraq, 202", "lat": 26.2432, "lon": 50.6112 },
{ "display_name": "Muharraq, Muharraq, 203", "lat": 26.2434, "lon": 50.6114 },
{ "display_name": "Muharraq, Muharraq, 204", "lat": 26.2436, "lon": 50.6116 },
{ "display_name": "Muharraq, Muharraq, 205", "lat": 26.2438, "lon": 50.6118 },
{ "display_name": "Muharraq, Muharraq, 206", "lat": 26.2440, "lon": 50.6120 },
{ "display_name": "Muharraq, Muharraq, 207", "lat": 26.2442, "lon": 50.6122 },
{ "display_name": "Muharraq, Muharraq, 208", "lat": 26.2444, "lon": 50.6124 },
{ "display_name": "Muharraq, Muharraq, 209", "lat": 26.2446, "lon": 50.6126 },
{ "display_name": "Muharraq, Muharraq, 210", "lat": 26.2448, "lon": 50.6128 },
{ "display_name": "Muharraq, Muharraq, 211", "lat": 26.2450, "lon": 50.6130 },
{ "display_name": "Muharraq, Muharraq, 212", "lat": 26.2452, "lon": 50.6132 },
{ "display_name": "Muharraq, Muharraq, 213", "lat": 26.2454, "lon": 50.6134 },
{ "display_name": "Muharraq, Muharraq, 214", "lat": 26.2456, "lon": 50.6136 },
{ "display_name": "Muharraq, Muharraq, 215", "lat": 26.2458, "lon": 50.6138 },
{ "display_name": "Muharraq, Muharraq, 216", "lat": 26.2460, "lon": 50.6140 },
{ "display_name": "Muharraq, Muharraq, 217", "lat": 26.2462, "lon": 50.6142 },
{ "display_name": "Muharraq, Muharraq, 224", "lat": 26.2464, "lon": 50.6144 },
{ "display_name": "Muharraq, Samaheej, 234", "lat": 26.2684, "lon": 50.6145 },
{ "display_name": "Muharraq, Samaheej, 235", "lat": 26.2686, "lon": 50.6147 },
{ "display_name": "Muharraq, Samaheej, 236", "lat": 26.2688, "lon": 50.6149 },
{ "display_name": "Muharraq, Samaheej, 237", "lat": 26.2690, "lon": 50.6151 },


  ];
  

  const fetchSuggestions = async (query, type) => {
    try {
      if (query.length > 1) {
        // Abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds
  
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=BH&accept-language=en`,
          { signal: controller.signal }
        );
  
        const data = await response.json();
        clearTimeout(timeoutId);
  
        const bahrainSuggestions = data.filter((item) =>
          item.display_name.toLowerCase().includes("bahrain")
        );
  
        const combinedSuggestions = [...manualAddresses, ...bahrainSuggestions];
  
        if (combinedSuggestions.length === 0) {
          showToast("No locations found in Bahrain. Please try again.", "error");
          return;
        }
  
        // Prevent setting the same location for both pickup and drop-off
        if (
          type === "pickup" &&
          dropoffLocation &&
          combinedSuggestions.some(
            (suggestion) => suggestion.display_name === dropoffLocation.display_name
          )
        ) {
          showToast(
            "Pickup and Drop-off locations cannot be the same. Please select different locations.",
            "error"
          );
          return;
        }
  
        if (
          type === "dropoff" &&
          pickupLocation &&
          combinedSuggestions.some(
            (suggestion) => suggestion.display_name === pickupLocation.display_name
          )
        ) {
          showToast(
            "Pickup and Drop-off locations cannot be the same. Please select different locations.",
            "error"
          );
          return;
        }
  
        // Update suggestions based on type
        if (type === "pickup") {
          setPickupSuggestions(combinedSuggestions);
        } else {
          setDropoffSuggestions(combinedSuggestions);
        }
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request timed out");
      } else {
        console.error("Error fetching suggestions:", error);
      }
    }
  };
  
  

  // Handle debounce for input fields
  let debounceTimer;

  const handleInputChange = (value, type) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (value.length > 1) {
        fetchSuggestions(value, type);
      }
    }, 300); // Waits 300ms after the user stops typing
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion, type) => {
    const location = `${suggestion.display_name}`;
    const coords = {
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    };

    const hasSpecificDetails = location.split(",").length > 3;

    if (type === "pickup") {
      setPickupLocation(location);
      setPickupCoords(coords);
      setPickupSuggestions([]);
    } else {
      setDropoffLocation(location);
      setDropoffCoords(coords);
      setDropoffSuggestions([]);
    }

    
  };

  // Function to convert 24-hour format to 12-hour AM/PM format
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const hours = parseInt(hour);
    const isPM = hours >= 12;
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${formattedHour}:${minute} ${isPM ? "PM" : "AM"}`;
    return formattedTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    if (!name || !selectedDate || !selectedTime || !phoneNumber || !pickupLocation || !dropoffLocation) {
      toast.error("Please fill in all the required fields.");
      return;
    }
    // Check if all fields are filled
    if (!name || name.trim() === "") {
      showToast("Please enter your name.", "error");
      return;
    }
  
    if (!phoneNumber || phoneNumber.trim() === "") {
      showToast("Please enter a valid phone number.", "error");
      return;
    }
  
    if (!pickupLocation || pickupLocation.trim() === "") {
      showToast("Please enter a pickup location.", "error");
      return;
    }
  
    if (!dropoffLocation || dropoffLocation.trim() === "") {
      showToast("Please enter a dropoff location.", "error");
      return;
    }
  
    if (!selectedVehicle) {
      showToast("Please select a vehicle.", "error");
      return;
    }
  
    if (!selectedDate) {
      showToast("Please select a date.", "error");
      return;
    }
  
    if (!selectedTime) {
      showToast("Please select a time.", "error");
      return;
    }
  
    // Check if pickup and dropoff locations are the same
    if (pickupLocation === dropoffLocation) {
      toast.error("Pickup and dropoff locations cannot be the same.", "error");
      return;
    }
  
    // If all validations pass, proceed with submission
    const selectedVehicleDetails = vehicles.find((v) => v.id === selectedVehicle);
    const data = {
      name,
      phoneNumber,
      pickupLocation,
      dropoffLocation,
      vehicle: {
        label: selectedVehicleDetails.label,
        charge: parseFloat(selectedVehicleDetails.charge.replace("Kwd ", "")),
      },
      distance: parseFloat(distance),
      selectedDate,
      selectedTime: convertTo12HourFormat(selectedTime),
    };
  
    setSubmittedData(data);
    navigate("/summaryComponent", { state: { submittedData: data } });
  };
  
  
  const AdjustMapView = ({ pickupCoords, dropoffCoords }) => {
    const map = useMap();
  
    useEffect(() => {
      if (pickupCoords && dropoffCoords) {
        // Calculate haversine distance
        const rad = (x) => (x * Math.PI) / 180;
        const R = 6371; // Radius of the Earth in km
        const dLat = rad(dropoffCoords.lat - pickupCoords.lat);
        const dLng = rad(dropoffCoords.lng - pickupCoords.lng);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(pickupCoords.lat)) *
            Math.cos(rad(dropoffCoords.lat)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        setDistance((R * c).toFixed(2)); // Set distance in km
  
        // Fit bounds to include pickup and dropoff
        const bounds = L.latLngBounds(
          [pickupCoords.lat, pickupCoords.lng],
          [dropoffCoords.lat, dropoffCoords.lng]
        );
        map.fitBounds(bounds, { padding: [50, 50] });
  
        // Add the routing control (polyline)
        L.Routing.control({
          waypoints: [
            L.latLng(pickupCoords.lat, pickupCoords.lng),
            L.latLng(dropoffCoords.lat, dropoffCoords.lng)
          ],
          createMarker: () => null, // Disable markers
          routeWhileDragging: true, // Enable dragging route
        }).addTo(map);
      }
    }, [pickupCoords, dropoffCoords, map]);
  };
  

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-100">
      <ToastContainer />
      {/* Input Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">
          Where should we pick up and drop off your items?
        </h2>

        {/* Date and Time Inputs */}
        <div className="flex gap-4">
          {/* Date Input */}
          <div className="relative w-1/2">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>


          {/* Time Input */}
          <div className="relative w-1/2">
            <input
              type="time"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
        </div>
        <div>
  <PhoneInput
    country={"bh"}
    value={phoneNumber}
    onChange={(phone) => {
      // Add a space after the country code
      const formattedPhone = phone.replace(/(\+\d{1,3})(\d+)/, "$1 $2");
      setPhoneNumber(formattedPhone);
    }}
    inputClass="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
    placeholder="Enter your phone number"
  />
  {/* Show error message if the field is empty */}
  {!phoneNumber && (
    <p className="text-red-500 text-sm mt-1"></p>
  )}
</div>

  <input
    type="text"
    placeholder="Enter Your Name"
    className="w-full border border-gray-300 rounded-lg px-4 py-2"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
  />


        {/* Pickup Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            value={pickupLocation}
            onChange={(e) => {
              setPickupLocation(e.target.value);
              handleInputChange(e.target.value, "pickup");
            }}
          />
          {pickupSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
              {pickupSuggestions.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion, "pickup")}
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dropoff Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Dropoff Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            value={dropoffLocation}
            onChange={(e) => {
              setDropoffLocation(e.target.value);
              handleInputChange(e.target.value, "dropoff");
            }}
          />
          {dropoffSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
              {dropoffSuggestions.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion, "dropoff")}
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vehicle Selection */}
        <div className="grid-cols-3 grid">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`cursor-pointer p-4 hover:text-white border rounded-lg hover:bg-dgreen ${
                selectedVehicle === vehicle.id ? "bg-red-100" : ""
              }`}
              onClick={() => setSelectedVehicle(vehicle.id)}
            >
              <div className="flex items-center justify-center text-xl">
                {vehicle.icon}
              </div>
              <p className="text-center ">{vehicle.label}</p>
              <p className="text-center ">{vehicle.charge}</p>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
         className="w-full py-3 bg-dgreen text-white hover:text-dgreen hover:ring-2 hover:ring-dgreen font-semibold rounded-lg hover:bg-white"

          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full z-0 lg:w-1/2 h-[500px] rounded-lg overflow-hidden">
      <MapContainer
  center={[26.2235, 50.5822]}
  zoom={12}
  style={{ width: "100%", height: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors, Tiles style by OSM France"
  />
  {pickupCoords && (
    <Marker position={[pickupCoords.lat, pickupCoords.lng]} icon={pickupIcon}>
      <Popup>{pickupLocation}</Popup>
    </Marker>
  )}
  {dropoffCoords && (
    <Marker position={[dropoffCoords.lat, dropoffCoords.lng]} icon={dropoffIcon}>
      <Popup>{dropoffLocation}</Popup>
    </Marker>
  )}
  <AdjustMapView pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
</MapContainer>

      </div>
      {/* Summary Component */}
      {submittedData && <SummaryComponent data={submittedData} />}
    </div>
  );
};

export default ManPower;
