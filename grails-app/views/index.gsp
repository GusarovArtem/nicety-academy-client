<!doctype html>
<html>
<head>
    <meta name="layout" content="main">
    <title>${message(code: 'home.label')}</title>
</head>
<body>

<div id="" style="display: flex; flex-direction:column;">

    <div>
        <academyMessages:showFlash flash="${flash}"/>
    </div>


    <div style="display: flex; justify-content: space-between; flex-direction: row-reverse; margin-top: 20px">
        Welcome to ${message(code: 'home.label')} ;)
    </div>

</div>

</body>
</html>
