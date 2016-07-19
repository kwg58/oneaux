
"use strict";

(function() {
    angular
    .module("oneaux")
    .controller("AdminPlistController", [
        "PlaylistFactory",
        "SongFactory",
        "$state",
        "$stateParams",
        AdminPlistControllerFunction
    ])

    function AdminPlistControllerFunction (PlaylistFactory, SongFactory, $state, $stateParams) {
        console.log("I'm in the admin playlist controller!")
        console.log($stateParams.id);
        var vm = this;
        vm.playlist = PlaylistFactory.get({id: $stateParams.id});
        console.log(vm.playlist);
        vm.songs = SongFactory.query({playlist_id: $stateParams.id});
        console.log(vm.songs);

        vm.playlistSort = function () {
            // for (i=0; i<vm.songs.length
        }

        vm.update_score = function (net) {
            vm.songs[0].score = parseInt(parseInt(vm.songs[0].score) + parseInt(net));
            console.log(vm.songs[0]);
            vm.songs[0].$update({playlist_id: $stateParams.id, id: vm.songs[0].id});
            // .then(function(){
            //
            // })

        }

    }

})();
