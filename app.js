
var produit = [
    {
        nom: 'Blouson Cuir Homme OSX',
        image: 'https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 225
    },
    {
        nom: 'POLO CINTRE SLIM FIT EN COTON BASIC Bleu',
        image: 'https://photos6.spartoo.com/photos/188/18830673/18830673_500_A.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 75
    },
    {
        nom: 'Robe rose croisée à boucler',
        image: 'https://m1.quebecormedia.com/emp/emp/A1_2_1_d64e884e-d21e-41ab-8eb0-2baf6b656c00_ORIGINAL.jpg?impolicy=cropresize&x=0&y=0&w=802&h=1086&width=925&height=925',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 50
    },
    {
        nom: 'Sneakers Adidas Original Homme',
        image: 'https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 159
    },
    {
        nom: 'Pantalon jogging Nike Just Do It - Noir',
        image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 27
    }
];

let regExpname = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]+$/;
let regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let regExphone =/^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$/

$(document).ready(function () {
    (function () {
        produit.forEach(element => {
            $(".card-group").append(
                "<div class='card'><img src='" + element.image + "' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + element.nom + "</h5><p class='card-text'>" + element.descrption + "</p><p class='card-text'><small class='text-muted'>" + element.prix + "</small></p><buttontype='button' class='btn btn-primary addpanier'>ajouter au panier</button></div></div>");
        });
    })();

    $(".addpanier").click(function (e) {
        e.preventDefault();
        console.log();
        let article = ($($(this).parent()[0]).find("h5").text());
        let prix = 0
        let total = 0
        let variable = ($(($(".produit_panier")[0])).find("h5"))
        console.log($(this).attr("class"));
        if ((this).classList.contains("clicked")) {
            $.each($(".produit_panier"), function (indexInArray, valueOfElement) {
                if (article == ($(($(".produit_panier")[indexInArray])).find("h5").text())) {
                    let plus = parseInt($(this).find("input").val()) + 1
                    $(this).find("input").val(plus)
                }
            });
        } else {
            $(".panier").append("<div class='card';'><div class='card-body row g-0 produit_panier'><h5 class='card-title col-8'>" + $($(this).parent()[0]).find("h5").text() + "</h5><button type='button' class='btn btn-danger col-4' data-bs-toggle='modal' data-bs-target='#'>supprimer</button><label>quantité <input type='number' value = 1 min='1'></label><label value =" + $($($(this).parent()[0]).find("p")[1]).text() + " >prix:" + $($($(this).parent()[0]).find("p")[1]).text() + "</label></div></div>");

            $(this).addClass("clicked");

        }
        $.each($(".produit_panier"), function (indexInArray, valueOfElement) {
            prix = extraitNombre($($(valueOfElement).find("label")[1]).attr("value"));;
            prix = prix * parseInt($(valueOfElement).find("input").val());
            $($(valueOfElement).find("label")[1]).text("prix: " + prix);
            total += prix;
        });
        console.log(total);
        $(".total_panier span").text("Total = " + total)
        $(".panier")

    });

    $(".validerinfo").click(function (e) {
        e.preventDefault();
        $(".paniervalide .card").remove();
        $.each($("form input"), function (indexInArray, valueOfElement) {
            (valueOfElement.value);
            $($("b")[indexInArray]).text(valueOfElement.value)
        });

        $.each($(".produit_panier"), function (indexInArray, valueOfElement) {
            $(".paniervalide").append("<div class='card'> <div class='card-body g-0 produit_panier'><div><h5 class='card-title'>" + $($(".produit_panier")[indexInArray]).find("h5").text() + "</h5></div><div class='row'><label class='col-6'><label with=auto>quantité : </label><b>" + $($(".produit_panier")[indexInArray]).find("input").val() + "</b></label>" + $($($(".produit_panier")[indexInArray]).find("label")[1]).text() + "</label></div></div></div>");
        });
    });

    $("#inputName").keyup(function (e) {
        if (!regExpname.test($("#inputName").val())) {
            $(this).addClass("btn-danger");
        }
        else{
            $(this).removeClass("btn-danger");

        }
    })
    $("#inputFirstName").keyup(function (e) {
        if (!regExpname.test($("#inputFirstName").val())) {
            $(this).addClass("btn-danger");
        }
        else{
            $(this).removeClass("btn-danger");

        }
    });
    $("#inputEmail").keyup(function (e) {
        if (!regEmail.test($("#inputEmail").val())) {
            $(this).addClass("btn-danger");
        }
        else{
            $(this).removeClass("btn-danger");

        }
    });
    $("#inputTel").keyup(function (e) {
        if (!regExphone.test($("#inputTel").val())) {
            $(this).addClass("btn-danger");
        }
        else{
            $(this).removeClass("btn-danger");

        }
    });

    function extraitNombre(str) { return Number(str.replace(/[^\d]/g, "")) }
})