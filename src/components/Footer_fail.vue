<template>
    <footer>
        <div class="footer">
            <h1><b>iFit</b></h1>
            <ol class="address">
                <li>NUS School of Computing, COM1, 13, </li>
                <li>Computing Dr, 117417</li>
                </ol>

            <div class="contact">
                <img src ="http://cdn.onlinewebfonts.com/svg/img_440190.png" alt= "Phone logo" height= "25" width= "25">
                <i> Contact Us At: + 65 6516 2727</i>

                <br><img src ="http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png" alt= "Email logo" height= "40" width= "40">
                <i> or Email Us At: @comp.nus.edu.sg</i>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer {
        background-color: rgb(59, 57, 57);
        height: 150px;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .address {
        font-size: 18px;
        color: white;
        float: left;
        padding-left: 40px;
        font-family: 'Times New Roman', Times, serif ;
        list-style: none;
    }
    .contact {
        color: white;
        font-size: 15px;
        float: right;
        padding-right: 40px;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(238, 175, 39);
        text-align: left;
        padding-left: 40px;
        padding-top: 20px;
    }
</style>