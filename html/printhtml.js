const Employee = require('../modlib/employee');
const Manager = require('../modlib/manager');
const Engineer = require('../modlib/engineer');
const Intern = require('../modlib/intern');

function genManager(manager) {
    let managerCard = '';
    if (manager.length > 0) {
        manager.forEach(element => {
            managerCard = managerCard.concat(`
            <div class="card-style card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.getName()}</h5>
                <p class="card-text">${element.getRole()}.</p>
                <div class="list-style">
                    <ul class=" list-group list-group-flush">
                        <li class="list-group-item">${element.getId}</li>
                        <li class="list-group-item">${element.getEmail}</li>
                        <li class="list-group-item">${element.getOfficeNum}</li>
                    </ul>
                </div>
            </div>
        </div>
            `)
            
        });
        return managerCard
    }
}

function genEngineer(engineer) {
    let enginCard = '';
    if (engineer.length > 0) {
        engineer.forEach(element => {
            enginCard = enginCard.concat(`
            <div class="card-style card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.getName()}</h5>
                <p class="card-text">${element.getRole()}.</p>
                <div class="list-style">
                    <ul class=" list-group list-group-flush">
                        <li class="list-group-item">${element.getId()}</li>
                        <li class="list-group-item">${element.getEmail()}</li>
                        <li class="list-group-item">${element.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
            `)
            
        });
        return enginCard
    }
}

function genIntern(intern) {
    let internCard = '';
    if (intern.length > 0) {
        intern.forEach(element => {
            internCard = internCard.concat(`
            <div class="card-style card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.getName()}</h5>
                <p class="card-text">${element.getRole()}.</p>
                <div class="list-style">
                    <ul class=" list-group list-group-flush">
                        <li class="list-group-item">${element.getId()}</li>
                        <li class="list-group-item">${element.getEmail()}</li>
                        <li class="list-group-item">${element.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
            `)
            
        });
        return internCard
    }
}

function generateHtml(manager, engineer, intern) {
return `
!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../devel/style.css" type="text/css">


    <title>Team Generator</title>
</head>

<body>

    <!--top header as a nav bar-->

    <div class="jumbotron">
        <h1 class="display-4">Our Team</h1>
    </div>

    <div class="container">
    <div class="row">

        <!--container that holds the employee cards-->
       ${genManager(manager)}
       ${genEngineer(engineer)}
       ${genIntern(intern)}
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>


</body>

</html>
`
};
module.exports = generateHtml;