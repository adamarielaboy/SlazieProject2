$(document).ready(function() {
	/**document.getElementById($("big_date")).innerHTML = (new Date()).toMoneString();
	$('big_date')
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth() + 1; //Months are zero based
		var curr_year = d.getFullYear();
		document.write(curr_year + "-" + curr_month + "-" + curr_date);
	document.getElementById("small-date").innerHTML = (new Date()).toDateString();
	$('progress_bar').circleProgress({
        value: 0.75,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });
    $('button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='tasks-list-item'>" + toAdd + '</div>');
    });
    $(document).on('click', '.item', .remove() {

    document.getElementById("small-date").innerHTML = (new Date()).toDateString();

      ('progress_bar').circleProgress({
          value: 0.75,
          size: 80,
          fill: {
              gradient: ["red", "orange"]
          }
      });

    document.getElementById("big_date").innerHTML = (new Date()).toDateString();

    });**/
  var tasks = [];
  var incomplete = 0;
  var done = 0;
  var progress = 0;

  htmlTask = function(task) {
    var html = "<div class='row tasks-list-item'> <div class='col-xs-12'> <div class='checkbox'><label><input type='checkbox' id='cbox" + task.id + "' onclick='getDoneCount(" + task.id + ")'> " + task.title + "</label><span>" + task.completed + "</span></div></div></div>";
    return html;
  };

  htmlDate = function() {
    var big_date = new Date();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var html = "<p>" + big_date.getDate() + "</p>" + "<span>" + n + "</span>";
    return html;
  };

  taskData = function() {
    var url = 'http://jsonplaceholder.typicode.com/todos';
    var data = $.ajax({
      url: url,
      method: 'GET'
    }).then(function(response) {
      tasks = response;
      main();
    });
  };

  main = function() {
    var htmlTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      htmlTasks.push(htmlTask(tasks[i]));
    }
    $('.tasks-list').html(htmlTasks.join(""));
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].completed === true) {
        done += 1;
      } else {
        incomplete += 1;
      }
    }
    console.log('completed: ', done);
    console.log('incomplete: ', incomplete);

    progress = (done / tasks.length) * 100;

    $('#progress').text(progress + "%");
    $('#date').html(htmlDate());
  };

  taskData();
});
