function getStreams() {
    $.get("/api/streams/all", data => {
        const count = data.length;
        $(".streamTotal").append(
            `<h1 class="counts">${count}</h1>`
        )
    })
};
function getRafts() {
    $.get("/api/raft/all", data => {
        const count = data.length;
        $(".raftTotal").append(
            `<h1 class="counts" >${count}</h1>`
        )
        console.log("Raft", data);
        
    })
};

getRafts();
getStreams();