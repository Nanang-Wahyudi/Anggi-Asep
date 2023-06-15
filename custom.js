document.addEventListener('DOMContentLoaded', function() {
        // Mendapatkan nilai parameter GET
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('name');

        // Menampilkan nilai parameter di dalam elemen HTML
        document.getElementById('result').innerHTML = `
          <p style="color: white;
                    font-weight: bold;
                    font-size: 20px;
                  ">
            <u>${nameParam} And Partner</u>
          </p>
        `;
      });