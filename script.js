document.querySelector('.toggle').addEventListener('click', googleApps);

function googleApps(e) {
    document.getElementById("dropdown").classList.toggle("toggleShow");

    let appDropdown = document.getElementsByClassName("google-apps");
        let i = 0;
        for (i = 0; i < appDropdown.length; i++) {
            let openDropdown = appDropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
}

