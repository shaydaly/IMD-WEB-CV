var education = angular.module("education", []);

    education.controller("educationController", 
		function educationController($scope) {
			// Array of my subjects and results added
			$scope.education = {
                thirdYear: [
                    {
                        id: 1,
                        subject: "Work Placement",
                        grade: "PASS"
                    },
                    {
                        id: 2,
                        subject: "Project",
                        grade: "B+"
                    },
                    {
                        id: 3,
                        subject: "Advanced Databases",
                        grade: "A"
                    },
                    {
                        id: 4,
                        subject: "Cloud Services",
                        grade: "B+"
                    },
                    {
                        id: 5,
                        subject: "Innovation & Entrpreneurship",
                        grade: "B"
                    },
                    {
                        id: 6,
                        subject: "Operation Systems",
                        grade: "B+"
                    },
                    {
                        id: 7,
                        subject: "Web Design 2",
                        grade: "A"
                    },
                    {
                        id: 8,
                        subject: "Algorithms and Data Structures",
                        grade: "B+"
                    }
                ],
                secondYear: [
                    {
                        id: 1,
                        subject: "Information Security",
                        grade: "A"
                    },
                    {
                        id: 2,
                        subject: "Object Oriented Analysis",
                        grade: "A"
                    },
                    {
                        id: 3,
                        subject: "Management Science",
                        grade: "A"
                    },
                    {
                        id: 4,
                        subject: "Project",
                        grade: "A"
                    },
                    {
                        id: 5,
                        subject: "Software Development 4",
                        grade: "A"
                    },
                    {
                        id: 6,
                        subject: "Web Design 1",
                        grade: "B+"
                    },
                    {
                        id: 7,
                        subject: "Discrete Maths 2",
                        grade: "A"
                    },
                    {
                        id: 8,
                        subject: "Database Design",
                        grade: "A"
                    },
                    {
                        id: 9,
                        subject: "Networking 1",
                        grade: "A"
                    },
                    {
                        id: 10,
                        subject: "Networking 2",
                        grade: "A"
                    },
                    {
                        id: 11,
                        subject: "Software Quality",
                        grade: "A"
                    },
                    {
                        id: 12,
                        subject: "Software Development 3",
                        grade: "A"
                    }
                ],
                firstYear: [
                    {
                        id: 1,
                        subject: "Operating Systems",
                        grade: "B+"
                    },
                    {
                        id: 2,
                        subject: "Database Fundamentals",
                        grade: "A"
                    },
                    {
                        id: 3,
                        subject: "Statistics",
                        grade: "A"
                    },
                    {
                        id: 4,
                        subject: "Social Media Communications",
                        grade: "A"
                    },
                    {
                        id: 5,
                        subject: "Software Development 4",
                        grade: "A"
                    },
                    {
                        id: 6,
                        subject: "Object Oriented Analysis",
                        grade: "B+"
                    },
                    {
                        id: 7,
                        subject: "Discrete Maths 1",
                        grade: "A"
                    },
                    {
                        id: 8,
                        subject: "Software Development 2",
                        grade: "A"
                    },
                    {
                        id: 9,
                        subject: "Business Information Systems",
                        grade: "A"
                    },
                    {
                        id: 10,
                        subject: "Fundamentals of Web",
                        grade: "A"
                    },
                    {
                        id: 11,
                        subject: "Computer Architecture",
                        grade: "B+"
                    },
                    {
                        id: 12,
                        subject: "Learning to Learn",
                        grade: "B+"
                    }
                ]
			};
    });



var skills = angular.module("skills", []);

skills.controller("skillsController",
    // Array of my subjects and results added
    function ($scope) {
        $scope.skills = {
            skills: [
                {
                    skill: "SQL",
                    ability: "100%"
                },
                {
                    skill: "Java",
                    ability: "100%"
                },
                {
                    skill: "Linux",
                    ability: "100%"
                },
                {
                    skill: "C#",
                    ability: "95%"
                },
                {
                    skill: "C++",
                    ability: "90%"
                },
                {
                    skill: "Git",
                    ability: "90%"
                },
                {
                    skill: "HTML",
                    ability: "85%"
                },
                {
                    skill: "CSS",
                    ability: "80%"
                },

                {
                    skill: "JavaScript",
                    ability: "80%"
                },
                {
                    skill: "Asp.net",
                    ability: "70%"
                }
            ]
        }
    });
var app = angular.module('DateApp', [])
app.controller('dateController', function ($scope) {
    $scope.CurrentDate = new Date();
});

angular.bootstrap(document.getElementById("RESULTS"), ['education']);
angular.bootstrap(document.getElementById("TODAY"), ['DateApp']);

