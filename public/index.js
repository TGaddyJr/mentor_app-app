/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to  TerranceLand",
      message2: "TestTestTest"
    };
  },
};


var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios.post("/user_token", params).then(function(response) {
        axios.defaults.headers.common["Authorization"] =
 "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        router.push("/");
      })
        .catch(function(error) {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        }.bind(this)
        );
    }
  }
};
var LogoutPage = {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var MenteeHomePage = {
  template: "#mentee-home-page",
  data: function() {
    return {
      message: "Welcome to the Mentee Home Page!",
      message2: "Please complete the form below.",
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
        // this.documents.push(response.data);
        router.push("/documents");
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
        // this.documents.push(response.data);
        router.push("/documents");
      }.bind(this));
    }
  },

  computed: {}
};


var DocumentHomePage = {
  template: "#document-home-page",
  data: function() {
    return {
      message: "Welcome to the Document Home Page!",
      message2: "Please complete the form below.",
    };
  },
  created: function() {
    axios.get('/documents').then(function(response) {
      console.log("I am in the documents");
      console.log(response.data);
      this.documents = response.data;
    }.bind(this));
  },

  methods: {
    addDocument: function() {
      console.log(this.placeUserName);
      var params = 
      {
       
      };

      axios.post('/documents', params).then(function(response) {
        this.documents.push(response.data);
        router.push("/appointments");
      }.bind(this));
    }
  },

  computed: {}
};
var AppointmentHomePage = {
  template: "#appointment-home-page",
  data: function() {
    return {
      message: "Welcome to the Appointment Home Page!",
      message2: "Please complete the form below.",
    };
  },
  created: function() {
    axios.get('/appointments').then(function(response) {
      console.log(this);
      console.log(response.data);
      this.appointments = response.data;
    }.bind(this));
  },

  methods: {
    addAppointment: function() {
      console.log(this.placeUserName);
      var params = 
      {
       
      };

      axios.post('/appointments', params).then(function(response) {
        this.appointments.push(response.data);
        router.push("/surveys");
      }.bind(this));
    }
  },

  computed: {}
};

var SurveyHomePage = {
  template: "#survey-home-page",
  data: function() {
    return {
      message: "Welcome to the Survey Home Page!",
      message2: "Please complete the form below.",
    };
  },
  created: function() {
    axios.get('/surveys').then(function(response) {
      console.log(this);
      console.log(response.data);
      this.surveys = response.data;
    }.bind(this));
  },

  methods: {
    addSurvey: function() {
      console.log(this.placeUserName);
      var params = 
      {
      };

      axios.post('/surveys', params).then(function(response) {
        this.surveys.push(response.data);
        router.push("/");
      }.bind(this));
    }
  },

  computed: {}
};


var router = new VueRouter({
  routes: 
  [
    {path: "/", component: HomePage},
    {path: "/signup", component: SignupPage},
    {path: "/login", component: LoginPage},
    {path: "/logout", component: LogoutPage },
    {path: "/mentees", component: MenteeHomePage}, 
    {path: "/mentors", component: MentorHomePage}, 
    {path: "/documents", component: DocumentHomePage},
    {path: "/appointments", component: AppointmentHomePage},    
    {path: "/surveys", component: SurveyHomePage}    
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});