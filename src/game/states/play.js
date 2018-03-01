export default function playState() {
    var boardSize = 9;
    var boardSquare = 32;

    var playerOneGroup;
    var playerTwoGroup;

    var turn = 2;

    return {
        create: function () {
            this.createBoard();
            this.populatePieces();
        },
        update: function () {

            if (turn % 2 === 0) {
                this.game.input.onDown.addOnce(this.PlayerOneMakeMove);
            } else if (turn % 2 === 1) {
                this.game.input.onDown.addOnce(this.PlayerTwoMakeMove);
            }
        },
        createBoard: function () {
            //top border
            for (let x = 0; x <= boardSize; x += 1) {
                if (x === 0) {
                    this.game.add.sprite(0, 0, 'board', 2)
                } else if (x === 9) {
                    this.game.add.sprite(boardSquare * x, 0, 'board', 4)
                } else {
                    this.game.add.sprite(boardSquare * x, 0, 'board', 3)
                }
            }
            //border sides
            for (let u = 1; u < boardSize; u += 1) {
                this.game.add.sprite(0, boardSquare * u, 'board', 9)
                this.game.add.sprite(288, boardSquare * u, 'board', 11)
            }
            //bottom border
            for (let i = 0; i <= boardSize; i += 1) {
                if (i === 0) {
                    this.game.add.sprite(288, 288, 'board', 18)
                } else if (i === 9) {
                    this.game.add.sprite(0, 288, 'board', 16)
                } else {
                    this.game.add.sprite(boardSquare * i, 288, 'board', 17)
                }
            }
            //board 
            for (let y = 1; y < boardSize; y += 1) {
                for (let z = 1; z < boardSize; z += 1) {
                    if (y % 2 === 0) {
                        if (z % 2 === 0) {
                            this.game.add.sprite(boardSquare * z, boardSquare * y, 'board', 0)
                        } else if (z % 2 === 1) {
                            this.game.add.sprite(boardSquare * z, boardSquare * y, 'board', 20)
                        }
                    } else {
                        if (z % 2 === 0) {
                            this.game.add.sprite(boardSquare * z, boardSquare * y, 'board', 20)
                        } else if (z % 2 === 1) {
                            this.game.add.sprite(boardSquare * z, boardSquare * y, 'board', 0)
                        }
                    }
                }
            }
        },
        populatePieces: function () {
            //for P1
            playerOneGroup = this.game.add.group();
            var pieceOne;
            for (let m = 1; m <= 8; m += 1) {
                for (let l = 1; l <= 3; l += 1) {
                    if (m % 2 === 1) {
                        if (l % 2 === 1) {
                            pieceOne = this.game.add.sprite(boardSquare * m, 288 - boardSquare * l, 'checkers', 4);
                            if (turn % 2 === 0) {
                                pieceOne.inputEnabled = true;
                                pieceOne.input.enableDrag(true);
                            }
                            playerOneGroup.add(pieceOne);
                        }
                    } else {
                        if (l % 2 === 0) {
                            pieceOne = this.game.add.sprite(boardSquare * m, 288 - boardSquare * l, 'checkers', 4);
                            if (turn % 2 === 0) {
                                pieceOne.inputEnabled = true;
                                pieceOne.input.enableDrag(true);
                            }
                            playerOneGroup.add(pieceOne);
                        }
                    }
                }
            };
            //for player 2
            playerTwoGroup = this.game.add.group();
            var pieceTwo;
            for (let m = 1; m <= 8; m += 1) {
                for (let l = 1; l <= 3; l += 1) {
                    if (m % 2 === 1) {
                        if (l % 2 === 0) {
                            pieceTwo = this.game.add.sprite(boardSquare * m, 0 + boardSquare * l, 'checkers', 5)
                            if (turn % 2 === 1) {
                                pieceTwo.inputEnabled = true;
                                pieceTwo.input.enableDrag(true);
                            }
                            playerTwoGroup.add(pieceTwo);
                        }
                    } else {
                        if (l % 2 === 1) {
                            pieceTwo = this.game.add.sprite(boardSquare * m, 0 + boardSquare * l, 'checkers', 5)
                            if (turn % 2 === 1) {
                                pieceTwo.inputEnabled = true;
                                pieceTwo.input.enableDrag(true);
                            }
                            playerTwoGroup.add(pieceTwo);
                        }
                    }
                }
            };
            // playerOneGroup.setAll()
            // playerOneGroup.setAll()
        },
        PlayerOneMakeMove: function () {

            turn += 1
            console.log(turn)
        },
        PlayerTwoMakeMove: function () {
            turn += 1
            console.log(turn)
        }
    }
}