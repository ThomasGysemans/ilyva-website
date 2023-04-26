<section>
    <h1>UN JEU POUR RÉVISER BASH</h1>
    <ul>
        <li>
            <div>
                <img src="/assets/duct-tape.png" alt="adesif">
                <img src="/assets/gameplay1.jpg" alt="gameplay1">
            </div>
        </li>
        <li>
            <div>
                <img src="/assets/duct-tape.png" alt="adesif">
                <img src="/assets/gameplay2.jpg" alt="gameplay2">
            </div>
        </li>
        <li>
            <div>
                <img src="/assets/duct-tape.png" alt="adesif">
                <img src="/assets/gameplay3.jpg" alt="gameplay3">
            </div>
        </li>
        <li>
            <div>
                <img src="/assets/duct-tape.png" alt="adesif">
                <img src="/assets/gameplay4.jpg" alt="gameplay4">
            </div>
        </li>
    </ul>
</section>


<style>
    section {
        margin: 30% 0;
    }
    h1 {
        color: white;
        display: block;
		margin: 50px 0 50px 15%;
		height: fit-content;
		font-family: 'Hack-Regular';
		font-size: 50px;
        font-weight: lighter;
    }
    ul {
        list-style: none;
        display: flex;
        flex-flow: row;
        height: 700px;
        overflow-x: scroll;
        overflow-y: hidden;
        scrollbar-width: none;
    }
    li {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li > div {
        display: flex;
        justify-content: center;
        background-color: white;
        width: 65%;
        height: 50%;
        margin: 60px;
    }
    ul > li:nth-of-type(2n) {
        transform: rotate(5deg);
    }
    ul > li:nth-of-type(2n+1) {
        transform: rotate(-5deg);
    }
    li > div > img:first-of-type {
        position: absolute;
        height: 20%;
        opacity: 20%;
        transform: rotate(-45deg) translate(50px,-50px);
    }

    li > div > img:last-of-type {
        display: block;
        height: 95%;
        margin: auto;
    }
</style>