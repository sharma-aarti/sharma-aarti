$(document).ready(function(){$("table").each(function(){"dark"==determineComputedTheme()?$(this).addClass("table-dark"):$(this).removeClass("table-dark"),0==$(this).parents('[class*="news"]').length&&0==$(this).parents('[class*="card"]').length&&0==$(this).parents("code").length&&($(this).attr("data-toggle","table"),$(this).addClass("table-hover"))})});