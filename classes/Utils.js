class Utils {

    static dateFormat(date) {
        return  this.lpadDate(date.getDate())      +'/' +
                this.lpadDate((date.getMonth()+1)) +'/' +
                date.getFullYear()                 + ' '+ 
                this.lpadDate(date.getHours())     +':' +
                date.getMinutes();
    }

    static lpadDate(date) {
        if(date < 10) return '0' + date;
    
        return date;
    }
}