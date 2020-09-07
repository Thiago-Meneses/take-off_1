function finish(){
    var response  = confirm('Deseja finalizar seu simulado?') //CONFIRMA A FINALIZAÇÃO DO SIMULADO
    if ( response == false ) {
        return;    
    }

    let validator
    let counter = 0
    let answers = [ 'q1' , 'q6' , 'q12' , 'q13' , 'q17' , 'q22' , 'q27' , 'q32' , 'q36' , 'q37' , 'q42' , 'q47' , 'q51' , 'q55' , 'q58' , 'q62' , 'q66' , 'q71' , 'q76' , 'q79' ]

    for ( x=0 ; x<20 ; x++ ) { //VERIFICA AS QUESTÕES QUE FORAM ACERTADAS
        if ( validator = document.getElementById(answers[x]).checked == true )
            counter++
    }
    let erros = 20 - counter

    //CRIAR TABELA
    var create_table = document.createElement("table")
    create_table.setAttribute("id", "table")
    document.getElementById('results').appendChild(create_table)

    
    //CRIAR 1 LINHA 
    var create_row   = document.createElement("tr")
    create_row.setAttribute("id", "row")
    document.getElementById("table").appendChild(create_row)

    //CRIAR TÍTULO (MATÉRIAS)
    var create_th    = document.createElement("th")
    var th_data      = document.createTextNode("Matérias")
    create_th.appendChild(th_data)
    create_th.setAttribute('colspan', 2)
    create_th.setAttribute('id' , 'materias')
    document.getElementById("row").appendChild(create_th)


    //CRIAR 2 LINHA
    var create_row2  = document.createElement('tr')       
    create_row2.setAttribute('id', 'row2')
    document.getElementById('table').appendChild(create_row2)

    //CRIAR TÍTULO (REGULAMENTOS)
    var create_th2   = document.createElement('th')     
    var th2_data     = document.createTextNode('Regulamentos de Tráfego Aéreo')
    create_th2.appendChild(th2_data)
    create_th2.setAttribute('colspan', 2);
    document.getElementById('row2').appendChild(create_th2)
    

    //CRIAR 3 LINHA
    var create_row3  = document.createElement('tr')
    create_row3.setAttribute('id', 'row3')
    document.getElementById('table').appendChild(create_row3)

    //CRIAR ACERTOS E ERROS
    var create_td   = document.createElement('td')
    var create_td2  = document.createElement('td')
    var td_acertos  = document.createTextNode('Respostas Corretas')
    var td_erros    = document.createTextNode('Respostas Erradas')
    create_td.appendChild(td_acertos)
    create_td2.appendChild(td_erros)
    create_td2.setAttribute('id' , 'wrong_answers')
    document.getElementById('row3').appendChild(create_td)
    document.getElementById('row3').appendChild(create_td2)


    //CRIAR 4 LINHA
    var create_row4 = document.createElement('tr')
    create_row4.setAttribute('id', 'row4')
    document.getElementById('table').appendChild(create_row4)
    
    //CRIAR QUANTIDADE DE ACERTOS E ERROS
    var create_td   = document.createElement('td')
    var create_td2  = document.createElement('td')
    var td_nacertos = document.createTextNode(counter)
    var td_nerros   = document.createTextNode(erros)
    create_td.appendChild(td_nacertos)
    create_td2.appendChild(td_nerros)
    create_td.setAttribute('id' , 'bottom-left')
    create_td2.setAttribute('id' , 'bottom-right')
    document.getElementById('row4').appendChild(create_td)
    document.getElementById('row4').appendChild(create_td2)

}