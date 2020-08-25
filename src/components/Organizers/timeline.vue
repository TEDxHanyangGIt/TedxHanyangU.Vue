<template>
<div class="fullwidth">
    <div class="timeline group">
        <div class="item">
            <h2>15th</h2>
            <p>[잇다, 있다]</p>
        </div>
        <div class="item">
            <h2>16th</h2>
            <p>발화[發花]</p>
        </div>
        <div class="item">
            <h2>17th</h2>
            <p>palette</p>
        </div>
        <div class="item">
            <h2>18th</h2>
            <p>선을 넘는 사람들</p>
        </div>
    </div>
</div>  
</template>

<script>
export default {
    name: "timeline"
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,900);
 *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
html, body {
        width: 100%;
        height: 100%;
		
}
body {
        font-family: 'Lato', sans-serif;
        line-height: 160%;
        font-size: 100%;
        color: #4d4d4d;
}
.group:after {
	content: "";
	display: table;
	clear: both;
}
.fullwidth {
    width: 20%;
	padding-top: 4rem;
	background-color: white;
	position: absolute;
	right: 0px;
	bottom: 0px;
	
}
.timeline {
	width: 100%;
	max-width: 60rem;
	margin-right: 0%;
	margin-left: auto;
	padding-right: 2rem;
	padding-bottom: 4rem;
	padding-left: 2rem;
	background-image: linear-gradient(#999, #999);
	background-size: 2px 100%;
	background-position: 50% 1rem;
	background-repeat: no-repeat;
}
@media (max-width: 40rem) {
	.timeline {
		background-position: 2rem 0;
	}
}
.timeline .item {
	position: relative;
	display: block;
	width: 50%;
	float: left;
	clear: both;
	margin-top: -1rem;
}
@media (max-width: 40rem) {
    .timeline .item {
		width: 100%;
		float: none;
		margin-top: 0;
		margin-bottom: 3rem;
	}
}
.timeline .item:before {
	content: '';
	position: absolute;
	top: 0.3rem;
	width: 1rem;
	height: 1rem;
	border: 2px solid #999;
	border-radius: 50%;
	background-color: #e6e6e6;
}
.timeline .item:hover:before {
	background-color: #999;
}
.timeline .item:first-child {
	margin-top: 0;
}
.timeline .item:nth-child(odd) {
	float: right;
	padding-left: 2rem;
}
.timeline .item:nth-child(odd):before {
	left: -0.5rem;
}
.timeline .item:nth-child(even) {
	padding-right: 2rem;
}
@media (max-width: 40rem) {
	.timeline .item:nth-child(even) {
		padding-right: 0;
		padding-left: 2rem;
	}
}
.timeline .item:nth-child(even):before {
	right: -0.5rem;
}
@media (max-width: 40rem) {
	.timeline .item:nth-child(even):before {
		left: -0.5rem;
	}
}
.timeline .item h2 {
	display: block;
	margin-bottom: 0;
}
.timeline .item:nth-child(even) h2 {
	text-align: right;
}
@media (max-width: 40rem) {
	.timeline .item:nth-child(even) h2 {
		text-align: left;
	}
}
</style>