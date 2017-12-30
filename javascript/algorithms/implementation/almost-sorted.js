//https://www.hackerrank.com/challenges/almost-sorted/problem

function processData(input) {

    var input = input.split('\n')
    var n = input[0]
    var nums = input[1].split(' ').map(item => parseInt(item))
    nums.unshift(0)

    console.log(almostSorted(n,nums))

}

function almostSorted(n,nums) {

    var start = 0
    var end = 0
    var sgmt = []
    var swap = []
    var swapd = true
    var revr = []
    var revrd = true

    for(var s=1;s<=n;s++) {
        if(nums[s]>nums[s+1]) {
            start = s
            break
        }
    }

    for(var e=n;e>start;e--) {
        if(nums[e]<nums[e-1]) {
            end = e
            break
        }
    }

    if(start===0 && end===0) return 'yes'

    sgmt = nums.slice(start,end+1)
    swap = nums.slice(start,end+1)
    swap[0] = swap[sgmt.length-1]
    swap[sgmt.length-1] = sgmt[0]
    swap.unshift(nums[start-1])
    swap.push(nums[end+1])

    for(var i=0;i<swap.length;i++) {
        if(swap[i]>swap[i+1]) {
            swapd=false
            break
        } 
    }

    if(swapd) return 'yes\nswap ' + start + ' ' + end

    revr = sgmt.reverse()
    revr.unshift(nums[start-1])
    revr.push(nums[end+1])
    for(var i=0;i<revr.length;i++) {
        if(revr[i]>revr[i+1]) {
            revrd=false
            break
        } 
    }

    if(revrd) return 'yes\nreverse ' + start + ' ' + end

    return 'no'

}

// processData('2\n4 2') //yes swap 1 2
// processData('6\n1 5 3 4 2 6') //yes swap 2 5
// processData('5\n1 5 3 4 2') //yes swap 2 5
// processData('6\n1 5 4 3 2 6') //yes reverse 2 5
// processData('4\n5 4 2 1') //yes reverse 1 4
// processData('3\n3 1 2') //no
// processData('5\n99 100 101 1 2') //no
// processData('6\n43 65 1 98 99 101') //no
// processData('100\n4104 8529 49984 54956 63034 82534 84473 86411 92941 95929 108831 894947 125082 137123 137276 142534 149840 154703 174744 180537 207563 221088 223069 231982 249517 252211 255192 260283 261543 262406 270616 274600 274709 283838 289532 295589 310856 314991 322201 339198 343271 383392 385869 389367 403468 441925 444543 454300 455366 469896 478627 479055 484516 499114 512738 543943 552836 560153 578730 579688 591631 594436 606033 613146 621500 627475 631582 643754 658309 666435 667186 671190 674741 685292 702340 705383 722375 722776 726812 748441 790023 795574 797416 813164 813248 827778 839998 843708 851728 857147 860454 861956 864994 868755 116375 911042 912634 914500 920825 979477') //swap 12 95
// processData('1000\n816 1124 3823 4302 4326 4626 5433 7826 9306 9898 9917 11151 13653 14286 14721 15566 15799 16715 17569 22010 22540 24581 24867 25596 26850 27229 28363 30141 30601 31850 32183 33515 33753 35194 36583 36799 38445 39272 39880 43035 44533 44837 45021 45623 46034 46971 47710 47818 47996 49984 50661 51869 51872 53712 54215 56295 57128 57265 58394 58478 58480 58581 58763 59763 60487 60756 61571 62667 63782 65067 66312 66532 67518 67681 67840 71451 72937 74807 75181 76503 76862 77830 80325 82444 82816 83471 86972 87592 87896 89652 92340 92873 93651 95099 95641 97412 97901 100819 101987 103537 105667 106689 107750 108831 111452 112115 113046 113218 114916 116500 119648 122998 125102 125464 127461 127477 127639 128647 128896 132433 132632 133122 134223 134325 135471 135638 136355 138955 139730 141591 143201 145243 145287 148864 149162 149201 149683 150376 150438 153640 154149 154344 154703 156074 156867 156977 158819 159688 159938 160799 161085 161906 163316 163396 163421 163426 164025 164244 165477 166762 168138 168513 170745 171810 174744 176795 177163 179142 179486 179647 180023 180800 182467 182590 183633 196841 184978 185273 187121 188142 188753 190099 190484 190581 193074 194392 194916 195768 183652 196961 197393 197806 198516 198675 199186 199876 200632 201467 202941 205195 205381 206004 206482 206783 207563 209940 211089 212098 214530 215531 220540 221088 222101 223069 226680 231411 231982 233440 234897 238422 240094 242279 243067 243150 246863 246900 247646 249182 249214 249517 249527 249721 251618 253735 253791 255676 256655 257884 259130 259570 259721 260338 261186 261240 261543 262508 263279 263680 264171 265041 265636 266769 267486 270616 271559 272547 277139 277815 279241 280482 281522 282159 284199 284738 288268 288626 288742 289134 289417 289430 289995 290297 291122 291820 293148 294106 294254 294475 295144 295279 295589 295914 297109 299624 301093 301732 303680 306548 306788 307815 310814 310856 312445 313111 314184 314704 314745 315525 315584 316031 316064 317102 317196 318245 321290 321403 326847 328760 330346 330473 330703 330895 331474 334055 335479 335895 338886 339198 341401 342036 343094 344176 344309 344849 345477 346040 346235 347152 353360 353393 354413 357968 361034 361225 361259 361503 361907 362414 366263 367818 368482 369460 371874 372519 372575 373863 378155 378775 380261 380444 381462 381630 382468 384263 385927 388508 389902 390456 391680 393725 396680 397534 397960 398064 398429 398842 399778 401643 402871 403971 404816 406371 407877 412451 412559 412771 413767 414272 416826 417770 418038 418802 419055 419131 419717 419811 419985 420403 421078 422148 422226 423051 425821 426456 426711 427177 427424 427781 428477 428573 434399 434636 435401 436348 437599 438068 438215 438259 439158 441925 443923 444690 444726 444734 446416 446947 448855 450472 450612 450678 451034 452060 453412 453528 453655 453711 454127 454501 454629 455544 457602 459645 460526 461599 463078 463761 464841 465138 467186 467645 467967 469282 470589 471237 471368 471794 472822 472882 473214 474216 476669 477098 477307 478777 480030 481411 482336 482376 483756 483975 485771 487387 487887 487985 488264 488670 489891 491465 492988 493706 494472 495219 495325 499155 499452 499521 499727 501835 502973 503041 503551 507482 508332 508778 508807 512204 512559 512793 512994 513783 514160 515684 517065 517708 518855 520753 521275 522840 522897 523010 524123 525185 527425 528830 529739 529957 531927 533374 533394 534814 535422 535612 535915 536724 538254 539400 539610 540665 543182 543943 546230 546684 548240 549078 549555 551330 551513 553151 556981 558475 559448 560153 560412 561671 563851 564130 564805 565968 566376 567189 568132 571320 571691 572927 573037 574304 575397 576462 577333 577532 577911 578329 579160 579226 579649 580376 581288 582415 582581 585024 585046 587453 589983 592777 593499 593825 594165 594181 594628 594975 596786 601078 601491 601830 602611 603843 604180 605595 607319 607752 608413 609272 610066 611873 612000 612771 613973 616448 616939 618384 619048 619371 619444 619662 621869 624462 624541 625515 625909 627375 627458 627515 630128 633674 634259 635276 637783 638499 639106 639489 640509 640668 641687 643598 644598 645057 646431 647194 649034 649483 649939 651208 654415 655569 656256 656308 656481 658831 660430 660592 660653 661405 661866 663072 665551 665660 665687 666740 667612 667635 667831 669319 670161 670439 671556 671776 671982 672011 673237 673819 674578 676521 676527 676691 677975 678308 678421 678656 679820 681540 681915 683064 683723 685292 685714 686944 687049 687145 687782 687852 689177 689776 690025 690301 692290 693193 698082 698115 699486 703144 704066 704652 705050 705383 707022 708030 708188 708747 709420 709746 709814 711063 711095 711415 712136 715976 717347 717374 718313 718687 721021 721224 721859 722186 722375 722776 723340 723628 723877 725660 726815 726949 726975 727426 727762 730649 730926 731469 731950 733569 735738 737204 739504 740779 741521 742414 743397 744817 746673 746753 746879 748001 748148 748271 748334 748441 748588 749555 750565 751908 751917 754216 755231 755841 756105 756179 757329 758301 758380 758967 759160 759571 759687 759786 760603 761423 763058 768060 768730 769657 771307 773267 774600 776003 776232 776983 777754 781566 782423 782454 782619 782771 783638 786123 786525 786651 787745 790023 790061 790098 790174 790765 791262 791724 792691 792701 792723 793302 795574 796005 796113 797416 798328 798859 799037 800760 801642 805365 806776 808124 810177 810626 811583 813110 813164 813248 813360 813760 814332 815507 817528 817754 818202 820112 820200 820717 824560 824953 826119 826265 827768 827778 828426 828900 829139 829613 829730 830243 832050 832204 832418 835137 835269 835697 837759 838326 839998 840536 842543 843708 844407 844753 845812 845987 847515 849572 850211 853485 853493 855508 857025 857147 857677 859206 860033 860071 860412 860454 861956 862304 862309 864994 865711 866546 866778 867111 870555 872108 872881 873747 874330 876961 877234 878290 878661 878925 878937 879459 880808 880928 881402 883001 884049 885330 886272 888307 891393 891659 891852 892453 892933 893190 893830 894297 894947 894973 896133 896366 897562 899649 900199 900269 900442 900873 901875 902252 905484 905866 906117 906671 907700 908073 909034 909387 910131 911042 911468 912634 913232 913912 914701 914866 915211 916013 916463 919701 920423 920534 924005 925474 927434 927452 928695 929065 929375 930897 930917 931692 931893 932519 934457 935108 935838 937554 941632 942453 943403 944388 946042 948972 950632 952191 952300 953356 953934 956927 957778 960283 960744 962743 964683 966076 966288 966693 967633 969148 969454 970322 970462 972075 972101 972142 973254 974756 975406 975676 976097 976136 977746 978140 978385 979925 981364 981373 981704 982720 983709 985953 989298 990191 990412 993943 994414 994876 996081 996812 998571 998641 999623 999720') //yes swap 176 189