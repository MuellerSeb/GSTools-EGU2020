var Config = {
    title: "Sample Lecture",
    url: "https://mmaelicke.github.io/sample-lecture",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            type: "static"
        },
        {
            label: "Notebooks",
            navigation: [
                {
                    label: "Introduction",
                    link: "Introduction.html",
                    github: "https://github.com/mmaelicke/sample-lecture/blob/master/Introduction.ipynb",
                    binder: "https://mybinder.org/v2/gh/mmaelicke/sample-lecture/master?filepath=Introduction.ipynb"
                }
            ]
        },
        {
            label: "Presentations",
            navigation: [
                {
                    label: "Introduction",
                    link: "Introduction.slides.html"
                }
            ]
        },
        {
            label: "Exercises",
            navigation: []
        },
        {
            label: "About",
            link: "about.md",
            type: "static"
        }
    ]
};
