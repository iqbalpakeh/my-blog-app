/**
 * Copyright (c) 2019, Progrema Studio. All rights reserved.
 */

import React, { Component } from "react";

import img_2 from "./images/img-post-1-2.png";
import img_3 from "./images/img-post-1-3.png";
import img_4 from "./images/img-post-1-4.png";
import img_5 from "./images/img-post-1-5.png";

export default class Content extends Component {
  render() {
    return (
      <div>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="entry-content">
                  <blockquote>
                    <p>
                      Baru-baru ini, lembaga kesehatan dunia (WHO) mengumumkan
                      bahwa daging merah dan olahannya dapat menyebabkan kanker
                      (usus). Keputusan ini dibuat oleh lembaga penelitian
                      kanker internasional (IARC) berdasarkan tinjauan terhadap
                      800 penelitian. Lantas apakah kita harus berhenti
                      mengkonsumsi daging merah dan daging olahan?
                    </p>
                  </blockquote>
                  <h4>
                    <span style={{ color: "#800000" }}>
                      <strong>Sekilas mengenai jenis-jenis daging</strong>
                    </span>
                  </h4>
                  <p>
                    Daging merah yang dimaksud adalah daging yang berwarna merah
                    sebelum dimasak (termasuk sapi, kambing, dan babi).
                    Sementara yang dimaksud dengan daging olahan adalah daging
                    (merah) yang dijual tidak dalam keadaan segar dan setelah
                    mengalami proses seperti diasinkan, diasap, difermentasi,
                    dikeringkan, ditambahkan pengawet atau bahan lain. Contoh
                    daging olahan adalah sosis, ham, bacon, salami, dendeng.
                    Daging cincang maupun daging cincang yang dipadatkan menjadi
                    patty untuk hamburger tanpa tambahan pengawet tidak termasuk
                    ke dalam golongan ini.
                  </p>
                  <p>
                    Daging putih berupa ayam, ikan, ataupun kalkun juga tidak
                    termasuk ke dalam dua golongan di atas (tidak ada bukti
                    bahwa daging putih ini bisa meningkatkan resiko terkena
                    kanker).
                  </p>
                  <h4>
                    <span style={{ color: "#800000" }}>
                      <b>Bagaimana daging merah menyebabkan kanker?</b>
                    </span>
                  </h4>
                  <p>
                    Para peneliti masih terus memelajari bagaimana tepatnya
                    daging merah dan olahannya dapat menyebabkan kanker.
                    Beberapa teorinya ialah :
                  </p>
                  <ol>
                    <li>
                      <p>
                        Efek dari pemecahan senyawa heme (yang membentuk
                        haemoglobin dan menyebabkan darah berwarna merah)
                        dipecah oleh sistem pencernaan menjadi kelompok senyawa
                        N-nitroso. Senyawa N-nitroso telah terbukti dapat
                        merusak sel-sel pelapis usus, sehingga sel-sel dinding
                        usus harus lebih banyak membelah diri dan meningkatkan
                        peluang mutasi DNA
                      </p>
                    </li>
                    <li>
                      <p>
                        Daging olahan mengandung bahan-bahan yang dapat
                        mengakibatkan terbentuknya senyawa N-nitroso dan
                        polisiklik aromatik hidrokarbon di dalam perut,
                        contohnya pengawet yang mengandung nitrit.
                      </p>
                    </li>
                    <li>
                      <p>
                        Proses memasak. Memasak daging pada temperatur tinggi
                        (dibakar atau dipanggang) bisa menyebabkan terbentuknya
                        senyawa-senyawa kimia seperti heterosiklik aromatik
                        amina dan polisiklik aromatik hidrokarbon yang diduga
                        dapat meningkatkan resiko kanker. Daging merah dan
                        olahannya menghasilkan senyawa-senyawa ini dalam jumlah
                        yang lebih besar dibanding golongan daging lain (daging
                        putih).
                      </p>
                    </li>
                    <li>
                      <p>
                        Kandungan besi dalam daging merah bisa meningkatkan
                        resiko kanker.
                      </p>
                    </li>
                    <li>
                      <p>
                        Koloni bakteri dalam perut memainkan peran dalam
                        pembentukan kanker.
                      </p>
                    </li>
                  </ol>
                  <p>
                    Dengan demikian, terlepas dari kualitas daging atau sumber
                    daging (lokal atau impor), kandungan alami dari daginglah
                    dan cara memasaknya yang dapat meningkatkan resiko kanker.
                  </p>
                  <blockquote>
                    <p>
                      Terlepas dari mekanisme pengaruh konsumsi daging terhadap
                      pembentukan kanker, IARC mempunyai bukti yang cukup untuk
                      dapat memutuskan bahwa daging olahan dapat dipastikan (
                      <em>definitely</em>) meningkatkan resiko kanker sementara
                      daging merah kemungkinan (<em>probably</em>) meningkatkan
                      resiko terjadinya kanker.
                    </p>
                  </blockquote>
                  <h4>
                    <span style={{ color: "#800000" }}>
                      <strong>
                        Seberapa besar derajat keyakinan daging merah
                        menyebabkan kanker?
                      </strong>
                    </span>
                  </h4>
                  <p>
                    Berdasarkan penggolongan IARC, daging olahan termasuk dalam
                    group 1 karsinogen (dapat dipastikan menyebabkan kanker)
                    bersama dengan alkohol, tembakau, arsenik, asbestos dan
                    pestisida. Sementara daging merah termasuk group 2a
                    (kemungkinan menyebabkan kanker) bersama dengan kerja shift
                    (diduga mengacaukan ritme sirkadia dan metabolisme).
                  </p>
                  <p>
                    Faktor-faktor resiko karsinogen yang tergolong di dalam
                    group lain dapat dilihat pada gambar di bawah ini.
                  </p>
                  <p>
                    <img className="img-responsive" src={img_2} alt="" />
                    <br />
                    Dengan mengkonsumsi 50 gram daging olahan (2 lembar bacon)
                    per hari, resiko terkena kanker usus meningkat 18%. Resiko
                    terkena kanker usus saat ini adalah sekitar 5%, peningkatan
                    18% menyebabkan resiko terkena kanker usus menjadi 5,9%
                    seperti dapat dilihat pada gambar berikut.
                  </p>
                  <p>
                    <img className="img-responsive" src={img_3} alt="" />
                  </p>
                  <blockquote>
                    <p>
                      Namun, perlu diingat bahwa penggolongan oleh IARC tersebut
                      didasarkan pada seberapa yakinnya sesuatu hal dapat
                      menyebabkan kanker berdasarkan data yang ada, bukan
                      seberapa banyak atau seberapa parah kanker yang bisa
                      disebabkan. Pengelompokan tersebut tidak didasari pada
                      level kekuatan karsinogen sehingga tidaklah tepat jika
                      dikatakan konsumsi daging merah sama berbahayanya dengan
                      merokok. Untuk lebih jelasnya, kita bisa melihat dari
                      perbandingan data kanker yang disebabkan oleh konsumsi
                      daging merah dan olahannya dengan kanker yang disebabkan
                      oleh rokok.
                    </p>
                  </blockquote>
                  <p>
                    <img className="img-responsive" src={img_4} alt="" />
                  </p>
                  <p>
                    Dari gambar di atas dapat dilihat bahwa resiko terkena
                    kanker akibat merokok lebih besar beberapa kali lipat
                    dibandingkan konsumsi daging merah dan olahannya.
                    Diperkirakan sekitar 8.800 kasus kanker tiap tahun di
                    Inggris disebabkan oleh konsumsi daging merah dan olahannya
                    dalam jumlah yang berlebihan sementara 64.500 kasus kanker
                    tiap tahun disebabkan oleh merokok. Selain itu, merokok
                    merupakan penyebab 86% kasus kanker paru-paru dan 19% kanker
                    jenis lain.
                  </p>
                  <h4>
                    <span style={{ color: "#800000" }}>
                      <strong>
                        Akhirnya, kita sampai pada pertanyaan paling penting:
                        haruskah kita berhenti mengkonsumsi daging merah dan
                        olahannya?
                      </strong>
                    </span>
                  </h4>
                  <p>
                    Daging merah merupakan sumber nutrisi yang penting untuk
                    manusia karena mengandung protein, vitamin, dan mineral
                    seperti besi dan zinc. Dengan demikian, konsumsi daging
                    merah tidak harus dihentikan, hanya harus dibatasi baik
                    jumlah maupun frekuensinya.
                  </p>
                  <blockquote>
                    <p>
                      <strong>
                        Batas konsumsi daging merah dan olahannya yang dianggap
                        aman adalah 70 gram daging merah (dan olahannya) per
                        hari.{" "}
                      </strong>
                    </p>
                  </blockquote>
                  <p>
                    Gambar di bawah ini bisa memberikan gambaran berapa banyak
                    konsumsi daging merah dan daging olahan yang
                    direkomendasikan.
                  </p>
                  <p>
                    <img className="img-responsive" src={img_5} alt="" />
                  </p>
                  <p>
                    Dengan demikian, jika anda terbiasa mengkonsumsi daging
                    dalam jumlah yang besar, anda mungkin harus menguranginya
                    atau menggantinya dengan ayam, ikan, atau kalkun. Anda juga
                    bisa mengurangi porsi daging dengan mencampur sayuran dan
                    kacang-kacangan ke dalam masakan anda.
                  </p>
                  <p>
                    Gaya hidup yang sehat adalah gaya hidup yang seimbang.
                    Konsumsi lebih banyak serat, buah, dan sayur; kurangi
                    konsumsi garam, daging merah dan olahannya. Aktif bergerak,
                    berolahraga secara teratur, jauhi konsumsi alkohol dan
                    jangan merokok.
                  </p>
                  <h4>
                    <span style={{ color: "#800000" }}>
                      <strong>Referensi</strong>
                    </span>
                  </h4>
                  <ol>
                    <li>
                      <p>
                        Interest C. A Rough Guide to the IARC’s Carcinogen
                        Classifications [Internet]. Compound Interest. [cited
                        2015 Oct 28]. Available from:
                        <br />
                        <a href="http://www.compoundchem.com/2015/10/26/carcinogens/">
                          http://www.compoundchem.com/2015/10/26/carcinogens/
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Véronique Bouvard, Dana Loomis, Kathryn Z Guyton, Yann
                        Grosse, Fatiha El Ghissassi, Lamia Benbrahim-Tallaa, et
                        al. Carcinogenicity of consumption of red and processed
                        meat. The Lancet. 2015 Oct 26;
                      </p>
                    </li>
                    <li>
                      <p>
                        Choices NHS. Eating meat and staying healthy – Live Well
                        – NHS Choices [Internet]. 2014 [cited 2015 Jul 12].
                        Available from:
                        <br />
                        <a href="http://www.nhs.uk/Livewell/Goodfood/Pages/meat.aspx#cooking">
                          http://www.nhs.uk/Livewell/Goodfood/Pages/meat.aspx#cooking
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Ijssennagger N, Belzer C, Hooiveld GJ, Dekker J, van Mil
                        SWC, Müller M, et al. Gut microbiota facilitates dietary
                        heme-induced epithelial hyperproliferation by opening
                        the mucus barrier in colon. Proc Natl Acad Sci. 2015 Aug
                        11;112(32):10038–43.
                      </p>
                    </li>
                    <li>
                      <p>
                        Radulescu S, Brookes MJ, Salgueiro P, Ridgway RA, McGhee
                        E, Anderson K, et al. Luminal Iron Levels Govern
                        Intestinal Tumorigenesis after Apc Loss In Vivo. Cell
                        Rep. 2012 Aug;2(2):270–82.
                      </p>
                    </li>
                    <li>
                      <p>
                        Processed meat and cancer – what you need to know
                        [Internet]. Cancer Research UK – Science blog. [cited
                        2015 Oct 28]. Available from: <br />
                        <a href="http://scienceblog.cancerresearchuk.org/2015/10/26/processed-meat-and-cancer-what-you-need-to-know/">
                          http://scienceblog.cancerresearchuk.org/2015/10/26/processed-meat-and-cancer-what-you-need-to-know/
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        So processed meat has been classified as carcinogenic.
                        Here’s what you need to know. [Internet]. ScienceAlert.
                        [cited 2015 Oct 28]. Available from:
                        <br />
                        <a href="http://www.sciencealert.com/so-processed-meat-has-been-classified-as-carcinogenic-here-s-what-you-need-to-know">
                          http://www.sciencealert.com/so-processed-meat-has-been-classified-as-carcinogenic-here-s-what-you-need-to-know
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Choices NHS. The eatwell plate – Live Well – NHS Choices
                        [Internet]. 2015 [cited 2015 Oct 28]. Available from:
                        <br />
                        <a href="http://www.nhs.uk/Livewell/Goodfood/Pages/eatwell-plate.aspx">
                          http://www.nhs.uk/Livewell/Goodfood/Pages/eatwell-plate.aspx
                        </a>
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </article>
        <hr />
      </div>
    );
  }
}
