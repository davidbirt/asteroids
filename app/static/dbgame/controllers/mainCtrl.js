angular.module('dbgame').controller('mainCtrl', ['$scope', function($scope){
    MC = $scope;
    $scope.rotation = 0;
    $scope.preload = function() {
        game.load.image('bg', 'http://davera.rocks/staticassets/stars-notdistorted.png');
        game.load.image('rocket', 'http://davera.rocks/staticassets/player.png');
        game.load.image('asteroid', 'http://davera.rocks/staticassets/aster.png');

    }

    $scope.create = function() {
        game.world.setBounds(0, 0, 1920, 1200);

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8;

        starfield = game.add.tileSprite(0, 0, 800, 600, 'bg');
        starfield.fixedToCamera = true;

        ship = game.add.sprite(300, 300, 'rocket');

        game.physics.p2.enable(ship);

        game.camera.follow(ship);

        cursors = game.input.keyboard.createCursorKeys();



    }

    $scope.update = function() {

        if (cursors.left.isDown)
        {
            ship.body.rotateLeft(100);
        }
        else if (cursors.right.isDown)
        {
            ship.body.rotateRight(100);
        }
        else
        {
            ship.body.setZeroRotation();
        }

        if (cursors.up.isDown)
        {
            ship.body.thrust(400);
        }
        else if (cursors.down.isDown)
        {
            ship.body.reverse(400);
        }

        if (!game.camera.atLimit.x)
        {
            starfield.tilePosition.x -= (ship.body.velocity.x * game.time.physicsElapsed);
        }

        if (!game.camera.atLimit.y)
        {
            starfield.tilePosition.y -= (ship.body.velocity.y * game.time.physicsElapsed);
        }
    }
     game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: $scope.preload, create: $scope.create, update: $scope.update });
}])
