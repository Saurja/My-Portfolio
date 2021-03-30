let app = new Vue({
    el: '#intro',
    data: {
        name: 'Saurja Ghosh',
        work: 'Software & Web Dev'
    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        todos: [{
            text: 'C/C++'
        }, {
            text: 'Java'
        }, {
            text: 'OOPS'
        }, {
            text: 'HTML5 & CSS'
        }, {
            text: 'JS'
        }, {
            text: 'PHP'
        }, {
            text: 'BOOTSTRAP'
        }, {
            text: 'SQL'
        }, {
            text: 'DBMS'
        }, {
            text: 'GIT & GITHUB'
        }, {
            text: 'UI/UX Design'
        }, {
            text: 'MS OFFICE'
        }]
    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        projects: [{
            name: 'Digital Wallet Web Application',
            text: 'Developed a prototype of a digital wallet is a software-based system that with the help of this application, a person can send and receive credit points to any user in the application.',
            link: "https://www.github.com/Saurja/digital-wallet"
        }, {
            name: "CNN to classify 14 chest diseases from a chest X-Ray dataset",
            text: "The project is developed to classify a dataset (*Here NIH data set) into 14 different types of common chest diseases with the help of CNN, to reduce the cost and the time required to find the pulmonary diseases"
        }, {
            name: "Covid 19 Detection Web App",
            text: "The project is developed to classify covid-19, made into a Web App that can be accessed by anywhere , to reduce the cost and the time required to detect Covid-19.",
            link: "https://github.com/Saurja/Covid-19_Disease_Diagnosis"
        }, {
            name: "Covid 19 Dashboard",
            text: "The Coronavirus dashboard provides an overview of the 2019 Novel Coronavirus COVID-19. It shows countries affected by covid from the top to bottom.",
            link: "https://github.com/Saurja/covid-dashboard"
        }]
    },
    methods: {
        redirect_to: function (link) {
            location.replace(link)
        }
    }
})