const data = {
    color: 'red',
    width: 400,
    height: 500
}

function fnn(stats) {
    const {color, width, height} = stats
    console.log(color, width, height);
}

fnn(data)

const developer =['Ivan', 'Ivanov', 'Developer department']

function fnn2(emp) {
    const [name, surname, department] = emp 

    let position

    if(emp[3] !== undefined) {
        position = emp[3]
    } else {
        position = 'Junior'
    }

    console.log(name, surname, department, position);
}

fnn2(developer)