// Creating a node
class Node {
    constructor(name, length,src,artist,bg) {
      this.musicNode = {
        name: name,
        length: length,
        path: src,
        artist:artist,
        bg:bg,
      };
      this.prev = null;
      this.next = null;
    }
  }
  
  // creating double liked list obj and pointer
  class DoubllyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.tempPos = null;
    }
  
    // push node to DLL
    push(name, length,src,artist,bg) {
      const newNode = new Node(name, length,src,artist,bg);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  
    // set position of current node
    // default is pointer of head node
    setDefaulltPointer() {
      this.tempPos = this.head;
    }
  
    // traverse DLL and return music obj
    traverse(direction) {
      // forward direction
      if (direction === 1 && this.tempPos.next != null) {
        this.tempPos = this.tempPos.next;
        return this.tempPos.musicNode;
      } else if (direction === -1 && this.tempPos.prev != null) {
        //backward direction
        this.tempPos = this.tempPos.prev;
        return this.tempPos.musicNode;
      }
      else if(direction===0 || this.tempPos.next==null){
        this.setDefaulltPointer()
        return this.tempPos.musicNode;
      }
    
      else if(this.tempPos.prev==null){
        this.tempPos=this.tail;
        return this.tempPos.musicNode;
      }
    }
  
    // check for position of node
    nodePosition() {
      if (this.tempPos.next === null) {
        return -1; // last pos
      } else if (this.tempPos.prev === null) {
        return 1; // first pos
      } else {
        return 0; // middle pos
      }
    }
  }

  function changePrevNextColor() {
    let position = dll.nodePosition();
  
    if (position === 1) {
      prev.style.color = "gray";
      next.style.color = "black";
    } else if (position === -1) {
      prev.style.color = "black";
      next.style.color = "gray";
    } else {
      prev.style.color = "black";
      next.style.color = "black";
    }
  }
  const dll = new DoubllyLinkedList();
  dll.push(
    "Love Dose",
    1,
    "https://pagalworld.cam/songs/indian-pop/Desi Kalakaar 2014/Love Dose 128 Kbps.mp3",
    "Honey Sing,Urvashi Rautela",
    "https://1.bp.blogspot.com/-aA1kehHdlno/VJUShxx-q8I/AAAAAAAAADs/X0Pulq4sKGg/s1600/10868119_857249307639647_7935425396689267421_n.jpg"
  );
  dll.push(
    "I Guess",
    4,
    "https://raag.fm/files/mp3/128/Punjabi-Singles/23722/I%20Guess%20-%20(Raag.Fm).mp3",
    "Krsna",
    "https://i.ytimg.com/vi/P4BmADBtqJA/maxresdefault.jpg"
  );
  dll.push(
    "Desi Kalakaar",
    2,
    "https://pagalworld.cam/songs/indian-pop/Desi%20Kalakaar%202014/Desi%20Kalakaar%20128%20Kbps.mp3",
    "Honey Singh,Sonakshi Sinha",
    "https://static.toiimg.com/photo/59841671.cms"
  );
 
  dll.push(
    "Dard E Disco",
    3,
    "https://pagalworlld.com/files/download/id/7192",
    "Me",
    "https://pagalworlld.com/siteuploads/thumb/sft15/7192_4.jpg"
  );

  dll.setDefaulltPointer();
