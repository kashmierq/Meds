
    // Company info toggle
    document.addEventListener('DOMContentLoaded', function () {
      const companyCheckbox = document.getElementById('company_address_billing_modal');
      const companyInfo = document.getElementById('company-info-container-modal');
      if (companyCheckbox && companyInfo) {
        companyCheckbox.addEventListener('change', function () {
          if (companyCheckbox.checked) {
            companyInfo.classList.remove('hidden');
          } else {
            companyInfo.classList.add('hidden');
          }
        });
      }
    });
 