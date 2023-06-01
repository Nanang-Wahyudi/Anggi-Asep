document.addEventListener('DOMContentLoaded', function() {
        // Mendapatkan nilai parameter GET
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name');

        // Menampilkan nilai parameter di dalam elemen HTML
        document.getElementById('result').innerHTML = `
          <h3 style="color: white;
                    font-weight: bold;
                  ">
            <u>${nameParam} And Partner</u>
          </h3>
        `;
      });