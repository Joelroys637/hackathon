import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBZH6ykfEGRik44qKpc5BcaU6fClB58rIQ",
      authDomain: "project1-5ecc4.firebaseapp.com",
      databaseURL: "https://project1-5ecc4-default-rtdb.firebaseio.com",
      projectId: "project1-5ecc4",
      storageBucket: "project1-5ecc4.firebasestorage.app",
      messagingSenderId: "686305454324",
      appId: "1:686305454324:web:26f90f846cffe5f558d6a1",
      measurementId: "G-VZP3TE2SE5"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    window.submitRegistration = function () {
      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const selectedEvent = document.getElementById("event").value;
      const eventName = document.getElementById("eventName").value.trim();
      const team = document.getElementById("team").value.trim();

      if (!fullname || !email || !phone || !selectedEvent || !eventName || !team) {
        alert("Please fill in all fields.");
        return;
      }

      const newRef = push(ref(db, 'registrations'));

      set(newRef, {
        fullname,
        email,
        phone,
        selectedEvent,
        eventName,
        team,
        timestamp: new Date().toISOString()
      }).then(() => {
        alert("🎉 Registration Successful!");
        document.querySelectorAll("input, select").forEach(el => el.value = "");
      }).catch(err => {
        alert("❌ Error: " + err.message);
      });
    }