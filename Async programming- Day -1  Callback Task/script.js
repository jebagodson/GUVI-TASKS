function one(cb = () => {}) {
    document.getElementById('output').textContent = '10';
    cb();
}

function two(cb = () => {}) {
    document.getElementById('output').textContent = '9';
    cb();
}

function three(cb = () => {}) {
    document.getElementById('output').textContent = '8';
    cb();
}

function four(cb = () => {}) {
    document.getElementById('output').textContent = '7';
    cb();
}

function five(cb = () => {}) {
    document.getElementById('output').textContent = '6';
    cb();
}

function six(cb = () => {}) {
    document.getElementById('output').textContent = '5';
    cb();
}

function seven(cb = () => {}) {
    document.getElementById('output').textContent = '4';
    cb();
}

function eight(cb = () => {}) {
    document.getElementById('output').textContent = '3';
    cb();
}

function nine(cb = () => {}) {
    document.getElementById('output').textContent = '2';
    cb();
}

function ten(cb = () => {}) {
    document.getElementById('output').textContent = '1';
    cb();
}

function result(cb = () => {}) {
    document.getElementById('output').textContent = 'Happy Independence Day';
}

///////////////
//CALLBACK HELL
///////////////

function independence() {
  one(() => setTimeout(() => {
     two(() => setTimeout(() => {
       three(() => setTimeout(() => {
        four(() => setTimeout(() => {
            five(() => setTimeout(() => {
                six(() => setTimeout(() => {
                    seven(() => setTimeout(() => {
                        eight(() => setTimeout(() => {
                            nine(() => setTimeout(() => {
                                ten(() => setTimeout(() => {
                                    result(() => setTimeout(() => {

                                    }, ));
                                }, 1000));
                            }, 1000));
                        }, 1000));
                    }, 1000));
                }, 1000));
            }, 1000));
        }, 1000));
       }, 1000));
     }, 1000));
  }, 1000));
}

independence(); 