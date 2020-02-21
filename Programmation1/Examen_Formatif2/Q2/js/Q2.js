/**Formatif 2 - Question 2
 * Rafael Izaias De Mendonça
 * Date: 2020-02-06
 */
var nb = 0;

for (var i = 0; i <= 995; i+=5){
    for (var j = 0; j <= 20; j++){
        if (nb === 20) {
            document.write("</br>");
            nb = 0;

        }
    }
    nb++;
    document.write(i+" - ");
}



