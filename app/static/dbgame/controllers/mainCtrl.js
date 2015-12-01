angular.module('dbgame').controller('mainCtrl', ['$scope', function($scope){
    MC = $scope;
    $scope.rotation = 0;
    $scope.preload = function() {
        game.load.image('bg', 'http://davera.rocks/staticassets/stars-notdistorted.png');
        game.load.image('rocket', 'http://davera.rocks/staticassets/player.png');
        game.load.image('asteroid', 'http://davera.rocks/staticassets/aster.png');

    }

    $scope.create = function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0,0 ,'bg');

        //create the ship
        player = game.add.sprite(300, 300, 'rocket');
         player.anchor.set(0.5);
         game.physics.enable(player, Phaser.Physics.ARCADE);
         //  and its physics settings
        cursors = game.input.keyboard.createCursorKeys()
    }

    $scope.update = function() {
        if (cursors.up.isDown)
       {
           game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
       }
       else
       {
           player.body.acceleration.set(0);
       }

       if (cursors.left.isDown)
       {
           player.body.angularVelocity = -300;
       }
       else if (cursors.right.isDown)
       {
           player.body.angularVelocity = 300;
       }
       else
       {
           player.body.angularVelocity = 0;
       }


    }
     game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: $scope.preload, create: $scope.create, update: $scope.update });
}])
