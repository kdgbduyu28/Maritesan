const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');


const {signup, signin, homePage, logout} = require("../controllers/controlAuth");
const {updateprofile} = require('../controllers/updateprofileauth');
const {googlesignin} = require('../controllers/controlAuthGoogle');
const {facebooksignin} = require('../controllers/controlAuthFacebook');

router.post('/api/signup', signup);
router.post('/api/signin', signin);
router.get('/homepage',protect, homePage);
router.get('/api/logout', logout);
// router.get('/api/googlesignincb', googlesigninStrategy, googlesigninCB);
router.post('/api/Google', googlesignin);
router.post('/api/Facebook', facebooksignin);

router.post('/api/updateprofile', updateprofile);

module.exports = router;
