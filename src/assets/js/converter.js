function converter() {
    var input_str; //store input
    var text_input; //store input after beging trim()med
    var output_html = ""; //store output
    var counter;

    input_str = document.getElementById('in_txt').value; //get input and store it in input_str
    text_input = input_str.trim(); //trim() input
    if (text_input.length > 0) {
        output_html += "<p>"; //begin by creating paragraph
        for (counter = 0; counter < text_input.length; counter++) {
            switch (text_input[counter]) {
                case '\n':
                    if (text_input[counter + 1] === '\n') {
                        output_html += "</p>\n<p>";
                        counter++;
                    } else output_html += "<br>";
                    break;

                case ' ':
                    if (text_input[counter - 1] != ' ' && text_input[counter - 1] != '\t')
                        output_html += " ";
                    break;

                case '\t':
                    if (text_input[counter - 1] != '\t')
                        output_html += " ";
                    break;

                case '&':
                    output_html += "&amp;";
                    break;

                case '"':
                    output_html += "&quot;";
                    break;

                case '>':
                    output_html += "&gt;";
                    break;

                case '<':
                    output_html += "&lt;";
                    break;

                default:
                    output_html += text_input[counter];

            }

        }
        output_html += "</p>"; //finally close paragraph
    }
    document.getElementById('out_html').value = output_html; // display output html
}

var el = document.getElementById('btn');
el.onclick = converter;