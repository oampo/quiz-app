var quiz = {};

// Models
// ======

// Question model
quiz.Question = function(question, answers) {
    this.question = question;
    this.answers = answers;
};

// Result model
quiz.Result = function(location, maxScore) {
    this.location = location;
    this.maxScore = maxScore;
};

// Score model
quiz.Score = function() {
    this.score = 0;
};

quiz.Score.prototype.increase = function(value) {
    this.score += value;
};

// Views
// =====

// Landing View
quiz.LandingView = function(router) {
    this.router = router;

    this.$container = $('.landing-page-view');
    this.$start = $('.startButton');
    this.$start.on('click', this.onStart.bind(this));
};

quiz.LandingView.prototype.show = function() {
    this.$container.show();
};

quiz.LandingView.prototype.hide = function() {
    this.$container.hide();
};

quiz.LandingView.prototype.onStart = function(event) {
    event.preventDefault();
    this.router.route('question');
};


// Quesion view
quiz.QuestionView = function(questions, score, router) {
    this.router = router;
    this.questions = questions;
    this.score = score;

    this.currentQuestion = 0;

    this.$container = $('.question-view');
    this.$question = $('.question');
    this.$answers = $('.answers');
    this.$questionNum = $('.questionNum');

    this.$answers.on('click', 'li', this.onSelectAnswer.bind(this));
};

quiz.QuestionView.prototype.show = function() {
    this.$container.show();
    this.render();
    $('body').addClass("changeBackground");
};

quiz.QuestionView.prototype.hide = function() {
    this.$container.hide();
};

quiz.QuestionView.prototype.render = function() {
    this.$question.empty();
    this.$answers.empty();

    var question = this.questions[this.currentQuestion];

    this.$question.append('<span>' + question.question + '</span>');

    for (var i=0; i<question.answers.length; i++) {
        var answer = question.answers[i];
        this.$answers.append('<li><span>' + answer +'</span></li>');
    }

    this.$questionNum.text(this.currentQuestion + 1);
};

quiz.QuestionView.prototype.advance = function() {
    this.currentQuestion += 1;
    this.render();
};

quiz.QuestionView.prototype.onSelectAnswer = function(event) {
    event.preventDefault();

    if (this.currentQuestion < this.questions.length - 1) {
        var score = $(event.currentTarget).index();
        this.score.increase(score);
        this.advance();
    }
    else {
        this.router.route('result');
    }
};

// Result view
quiz.ResultView = function(results, score, router) {
    this.results = results;
    this.score = score;
    this.router = router;

    this.$container = $('.result-view');
    this.$result = $('.result');
};

quiz.ResultView.prototype.show = function() {
    this.$container.show();
    this.render();
};

quiz.ResultView.prototype.hide = function() {
    this.$container.hide();
};

quiz.ResultView.prototype.render = function() {
    for (var i=0; i<this.results.length; i++) {
        var result = this.results[i];
        if (this.score.score <= result.maxScore) {
            break;
        }
    }

    this.$result.text(result.location);
};

// Services
// ========

// Router
quiz.Router = function() {
    this.currentRoute = null;
    this.routes = {};
};

quiz.Router.prototype.add = function(route, view) {
    this.routes[route] = view;
};

quiz.Router.prototype.route = function(route) {
    // Hide the current view
    if (this.currentRoute) {
        this.routes[this.currentRoute].hide();
    }
    // Show the new view
    this.routes[route].show();
    this.currentRoute = route;
};


$(document).ready(function() {
    var questions= [
        new quiz.Question("How much time do you have?", [
                "long weekend", "one week", "sabbatical"
        ]),
        new quiz.Question("How sick of work/stressed out are you?", [
                "a little", "normal",
                "I live in NYC/and/or work at a start-up"
        ]),
        new quiz.Question("Do you need to chill or be active? " +
                          "Choose your blend of chill & active.", [
            "busy", "hectic", "mellow"
        ]),
        new quiz.Question("Do you like chaos? " +
                          "Choose your blend of chaos & serenity.", [
            "chaos", "serenity", "in the middle"
        ]),
        new quiz.Question("Do you like people?", [
            "yeah", "some",
            "I regularly commute on a rush hour subway/freeway."
        ])
    ];

    var results = [
        new quiz.Result('Goa, India', 2),
        new quiz.Result('Glacier National Park, USA', 4),
        new quiz.Result('Lake Baikal, Russia', 6),
        new quiz.Result('Leicester, England', 8),
        new quiz.Result('Bogota, Colombia', 10)
    ];

    var score = new quiz.Score();

    var router = new quiz.Router();
    var landingView = new quiz.LandingView(router);
    var questionView = new quiz.QuestionView(questions, score, router);
    var resultView = new quiz.ResultView(results, score, router);

    router.add('start', landingView);
    router.add('question', questionView);
    router.add('result', resultView);

    router.route('start');
});
