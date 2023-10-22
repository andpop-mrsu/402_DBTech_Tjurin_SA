#!/usr/bin/env php

<?php

require_once __DIR__ . '/../vendor/autoload.php';

use ts-stas\ColdHot\Controller\Controller;

$controller = new Controller;
$controller->startGame();