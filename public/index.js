/* global Vue, VueRouter, axios */

var MenteeHomePage = {
  template: "#mentee-home-page",
  data: function() {
    return {
      message: "Welcome to the Mentee Home Page!",
      message2: "Please complete the form below.",
      // mentee: [],
      placeUserName: "",
      placePasswordDigest: "",
      placeTitle: "",
      placeFirstName: "",
      placeMiddleName: "",
      placeLastName: "",
      placeSuffix: "",
      placeAreaOfFocus: "",
      placeProfession: "",
      placeHomeAddress: "",
      placeHomeCity: "",
      placeHomeState: "",
      placeHomePostalCode: "",
      placeHomePhone: "",
      placeMobilePhone: "",
      placeEmailAddress: "",
      placeBirthdate: "",
      placeDateJoined: "",
      placeRegionalConf: "",
      placeRegionalConfYr: "",
      placeRegionalConfState: "",
      placeRegionalConfPending: "",
      placeNationalConf: "",
      placeNationalConfYr:"",
      placeNationalConfState: "",
      placeNationalConfPending: "",
      placeActive: "",
      placePhoto: "",
      placeAdditionalInfo: ""
    };
  },
  created: function() {
    axios.get('/mentees').then(function(response) {
      console.log(this);
      console.log(response.data);
      this.mentee = response.data;
    }.bind(this));
  },

  methods: {
    addMentee: function() {
      console.log(this.placeUserName);
      var params = 
      {
        user_name: this.placeUserName,
        password_digest: this.placePasswordDigest,
        title: this.placeTitle,
        first_name: this.placeFirstName,
        middle_name: this.placeMiddleName,
        last_name: this.placeLastName,
        suffix: this.placeSuffix,
        area_of_focus: this.placeAreaOfFocus,
        profession: this.placeProfession,
        home_address: this.placeHomeAddress,
        home_city: this.placeHomeCity,
        home_state: this.placeHomeState,
        home_postal_code: this.placeHomePostalCode,
        home_phone: this.placeHomePhone,
        mobile_phone: this.placeMobilePhone,
        email_address: this.placeEmailAddress,
        birthdate: this.placeBirthdate,
        date_joined: this.placeDateJoined,
        regional_conf: this.placeRegionalConf,
        regional_conf_yr: this.placeRegionalConfYr,
        regional_conf_state: this.placeRegionalConfState,
        regional_conf_pending: this.placeRegionalConfPending,
        national_conf: this.placeNationalConf,
        national_conf_yr: this.placeNationalConfYr,
        national_conf_state: this.placeNationalConfState,
        national_conf_pending: this.placeNationalConfPending,
        active: this.placeActive,
        photo: this.placePhoto,
        additional_info: this.placeAdditionalInfo
      };

      axios.post('/mentees', params).then(function(response) {
        this.mentees.push(response.data);
      }.bind(this));
    }
  },
  computed: {}
};

var MentorHomePage = {
  template: "#mentor-home-page",
  data: function() {
    return {
      message: "Welcome to the Mentor Home Page!",
      message2: "Please complete the form below.",
      // mentor: []
    };
  },
  created: function() {
    axios.get('/mentors').then(function(response) {
      console.log(this);
      console.log(response.data);
      this.mentor = response.data;
    }.bind(this));
  },

  methods: {
    addMentor: function() {
      console.log(this.placeUserName);
      var params = 
      {
        user_name: this.placeUserName,
        password_digest: this.placePasswordDigest,
        title: this.placeTitle,
        first_name: this.placeFirstName,
        middle_name: this.placeMiddleName,
        last_name: this.placeLastName,
        suffix: this.placeSuffix,
        area_of_focus: this.placeAreaOfFocus,
        profession: this.placeProfession,
        home_address: this.placeHomeAddress,
        home_city: this.placeHomeCity,
        home_state: this.placeHomeState,
        home_postal_code: this.placeHomePostalCode,
        home_phone: this.placeHomePhone,
        mobile_phone: this.placeMobilePhone,
        email_address: this.placeEmailAddress,
        birthdate: this.placeBirthdate,
        date_joined: this.placeDateJoined,
        regional_conf: this.placeRegionalConf,
        regional_conf_yr: this.placeRegionalConfYr,
        regional_conf_state: this.placeRegionalConfState,
        regional_conf_pending: this.placeRegionalConfPending,
        national_conf: this.placeNationalConf,
        national_conf_yr: this.placeNationalConfYr,
        national_conf_state: this.placeNationalConfState,
        national_conf_pending: this.placeNationalConfPending,
        active: this.placeActive,
        photo: this.placePhoto,
        additional_info: this.placeAdditionalInfo
      };
      
      axios.post('/mentors', params).then(function(response) {
        this.mentors.push(response.data);
      }.bind(this));
    }
  },

  computed: {}
};
var router = new VueRouter({
  routes: [{ path: "/mentees", component: MenteeHomePage}, {path: "/mentors", component: MentorHomePage}],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});