document.addEventListener("DOMContentLoaded", (event) => {
    const ttAuthorVideoRows = document.querySelectorAll(".tt-author-video-row");


    if (ttAuthorVideoRows) {
        ttAuthorVideoRows.forEach((ttAuthorVideoRow) => {
            const ttAuthorVideoActions = ttAuthorVideoRow.querySelector(".tt-author-video-actions");
            console.log(ttAuthorVideoActions);

            const ttAuthorVideoActionToggler = ttAuthorVideoRow.querySelector(".tt-author-video-action-toggler");
            ttAuthorVideoActionToggler.addEventListener("click", (event) => {
                event.preventDefault();
                ttAuthorVideoActions.classList.toggle("active");
            });
        });

    }
});