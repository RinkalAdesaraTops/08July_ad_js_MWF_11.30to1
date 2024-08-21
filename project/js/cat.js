let catData = []
//add category 
const saveCat = ()=>{
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    // let len;
    // if(alldata != null){
    //     len = alldata.length + 1;
    // } else {
    //     len = 1;
    // }
    let len = (alldata != null) ?alldata.length + 1 : 1;
    let cname = document.catfrm.catname.value;
    let obj = {
        id:len,
        name:cname
    }
    catData.push(obj)
    localStorage.setItem('catInfo',JSON.stringify(catData))
    // document.catfrm.catname.value = ''
    document.catfrm.reset();
    disp()
} 
//display all categories
const disp =()=>{
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    let tr = '';
    alldata.map((i)=>{
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td><button class="btn btn-info"><i class="fa fa-pen"></i></button>&nbsp;<button class="btn btn-danger" onclick="deleteCat(${i.id})"><i class="fa fa-trash"></i></button></td>
        </tr>`
    })
    document.getElementById("tblCatData").innerHTML = tr
}
//Delete category idwise
const deleteCat = (id)=>{
    let alldata = JSON.parse(localStorage.getItem("catInfo"))
    // alldata.splice(id-1,1)
    let arr = alldata.filter((i)=>{
        return i.id != id;
    })

    let j = 1;
    let a = arr.map((i)=>{
        i.id = j++;
        return i;
    })
    localStorage.setItem('catInfo',JSON.stringify(a))
    disp()

}
disp()

