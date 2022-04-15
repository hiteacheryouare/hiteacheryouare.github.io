import '../styles/css/tailwind.css'
import '../styles/scss/fonts.scss'
import '../styles/scss/misc.scss'

import { DetectScreenOrientation, DetectDeviceType, finiteMobileDeviceType, ORIENTATION_isLandscape, DEVICE_type, DEVICE_finiteType } from 'uadetect';

const webDev = document.getElementById('webDev');
const deskDev = document.getElementById('deskDev');
const frontDev = document.getElementById('frontDev');
const mobDev = document.getElementById('mobDev');

const detectDeviceAndThenDecideWhatSubtitleToShow = () => {
    if (DEVICE_type == 'desktop') {
        mobDev.style.display = 'none';
    }
    else if (DEVICE_type == 'mobile') {
        deskDev.style.display = 'none';
        webDev.style.display = 'none';
        frontDev.style.display = 'none';
    }
    else {
        deskDev.style.display = 'none';
        webDev.style.display = 'none';
        frontDev.style.display = 'none';
    }
};


// This code will run on load
$(document).ready(function () {
    detectDeviceAndThenDecideWhatSubtitleToShow();
});
