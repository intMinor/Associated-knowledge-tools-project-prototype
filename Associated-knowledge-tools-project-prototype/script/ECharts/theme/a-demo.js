<script src="echarts.js"></script>
/* 引入 vintage 主题 */
<script src="theme/vintage.js"></script>
<script>
/* 第二个参数可以指定前面引入的主题 */
var chart = echarts.init(document.getElementById('main'), 'vintage');
chart.setOption({
//    ...
});
</script>