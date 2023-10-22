<?php

namespace ts-stas\ColdHot\Controller;

use ts-stas\ColdHot\View\View;
use function cli\line;

class Controller
{
    public function startGame()
    {
        line("Start the game!");

        $view = new View();
        $view->showGame();
    }
}