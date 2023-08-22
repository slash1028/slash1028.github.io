let bookList = d3.select(".book-list");
let tinyView2 = d3.select(".svg2");
let books = new Array();
let authorFreList = new Array();
let numOfYear = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

class authorFre{
    constructor(name, fre){
        this.name = name;
        this.fre = fre;
    }
}

let p = new Promise((resolve)=>{
    d3.csv("./data/douban_top250.csv", function(csvdata){ 
            books.push(csvdata);
            // 因为这个操作为异步,所以要加锁,不然后续length为0
            resolve(books);
        });
    }
)

p.then((books)=>{
    console.log(books);
//side-bar
    for(book of books){
        let li = bookList.append("li");
        li.append("h4").attr("class","rank").text(`${book.rank}`);
        li.append("h4",".name").attr("class","name").text(`${book.name}`);
        let flag = false;
        li.on("mouseenter", function(){
            li.attr("style","color:#ebebd3");
        })
        li.on("mouseleave", function(){
            li.attr("style","color:rgb(137,157,192)");
        })

        for(let son of authorFreList){
            if(son.name == book.author){
                son.fre += 1;
                flag = true;
            }
        }
        if(!flag){
            authorFreList.push(new authorFre(book.author, 1));
        }
        if(book.year >= 2000 && book.year <= 2020){
            numOfYear[book.year % 2000] += 1;
        }
    }

//tiny-view2 词云
    authorFreList.sort(function(a, b){ //默认情况为正序排列
        return b.fre - a.fre; 
    });
    //排完序大的先放,所以在画板下面
    let colorSet = ["rgb(25,202,173)","rgb(140,199,181)","rgb(160,238,225)",
    "rgb(190,237,199)","rgb(190,231,233)","rgb(214,213,183)","rgb(209,186,116)",
    "rgb(230,206,172)","rgb(236,173,158)","rgb(244,96,108)","#1abc9c","#2ecc71","#3498db"
    ,"#16a085","#27ae60","#2980b9","#f1c40f","#e67e22","#f39c12","#d35400"
    ,"#58B19F","#9AECDB","#182C61","#D6A2E8","#B33771"];
    for(let author of authorFreList){
        let authorX = 13.5 + 
                    Math.pow(-1, Math.floor(2 * Math.random() + 1)) * 
                    (11 / Math.pow(author.fre,0.2) * Math.random()) + "rem";
                    //让点在x轴中线上展开,所以缩小fre的影响
        let authorY = 5.5 + 
                    Math.pow(-1, Math.floor(2 * Math.random() + 1)) * 
                    (5 / author.fre * Math.random()) + "rem";
        let authorR = Math.pow(author.fre, 1.5) / 10  + "rem";
        let authorColor = colorSet[Math.floor(25 * Math.random())];
        let circle = tinyView2.append("circle").attr("cx",`${authorX}`)
                            .attr("cy",`${authorY}`)
                            .attr("style",`r:${authorR}`)
                            .attr("fill",`${authorColor}`)
        if(author.fre >= 2){
            circle.on("mouseenter", function(){
                circle.attr("fill","#2C3A47");
                d3.select(".svg2").append("text")
                                .attr("id",`${author.name}`)
                                .text(`${author.name}`)
                                    .attr("x",`${authorX}`)
                                    .attr("y",`${authorY}`)
                                    .attr("dx", "1.5rem")
                                    .attr("dy", "1.5rem")
                                    .attr("fill","rgb(1,77,103)")
                                    .attr("stroke","black");
            })
            circle.on("mouseleave", function(){
                circle.attr("fill",`${authorColor}`);
                let text = d3.select(`#${author.name}`);
                text.remove();
            })
        }
    }

//tiny-view1 21年(00-20) 每年的上榜数量 numOfYear
    let svg = d3.select('.svg1')
    let chart = svg.selectAll('rect')
        .data(numOfYear).enter()
        .append('rect')
        .attr('x', function(d,i) {return (1 + i) * 1.5 + "rem"})
        .attr('y', 0)
        .attr("stroke","white")
        .attr("fill","rgb(3,54,73)")
        .attr('width', "1rem")
        .attr('height', function(d) {return d * 0.55 + "rem"})
    svg.selectAll("text")
        .data(numOfYear)
        .enter()
        .append("text")
        .text(function(d) {return d})
        .attr("y", function(d) {return d * 0.55 - 0.1 + "rem"})
        .attr("x", function(d,i) {return (1 + i) * 1.5 + 0.25 + "rem"})
        .attr("font-family", "sans-serif")
        .attr("font-size", "0.5rem")
        .attr("fill", "white")
    svg.append("text")
        .text("2000-2020上榜书目数")
        .attr("y", "12rem")
        .attr("x", "24rem")
        .attr("font-family", "sans-serif")
        .attr("fill", "rgb(3,54,73)")
        .attr("font-weight","1000")
    let rects = document.querySelectorAll('.svg1 rect');
    let year = 2000;
    for(let rect of rects){
        rect.onmouseenter = function(){
            rect.style.fill = "rgb(96,143,159)";
        }
        rect.onmouseleave = function(){
            rect.style.fill = "rgb(3,54,73)";
        }
        year++;
    }
})
