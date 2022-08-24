import React from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import styles from '../styles/Tnc.module.css';
import Footer from '../components/Footer';


const Tnc = ({ subTotal, product }) => {
  return (
    <div><Navbar product={product} KYC={'KYC'} About={'About'} Contact={'Contact'} Login={'Login'} Signup={'Signup'} subTotal={subTotal} />
      <div className={styles.tnc_bg}>
        <div className={styles.tnc_body}>
          <h2 style={{ textAlign: "center" }}>TERMS &amp; CONDITIONS </h2>
          <div>
            <h2>1. TERM</h2>
            <p>This Agreement shall commence on the date the products (more fully set out in the Schedule) <strong>(“Product(s)”)</strong> are delivered to the
              Customer and remain in full force and effect until the fixed period [equivalent to the tenure of the contract that is agreed by the
              Customer while booking the Product(s)] expires and the Products is returned to Craving For Gaming, unless terminated earlier or
              extended pursuant to the flexi tenure policy. </p>
            <h2>
              2. FLEXI TENURE POLICY
            </h2>
            <p>Craving For Gaming provides its Customers, an option to opt for flexible tenure <strong>(“Flexi Tenure”)</strong> for early closure and/or extension of
              the term of the Agreement. In case of early closure, the Customer can request for closing the order by informing Craving For Gaming,
              any time prior to the date the Customer wishes to close the order. Craving For Gaming provides its Customer with different tenure
              rental rates depending on the tenure of the Agreement at the time of order placement. In the event of early closure, the Customer
              shall be liable to pay the early closure charges which shall be calculated based on the tenure selected by the Customer. The early
              closure charges shall be maximum upto the total amount of security deposit paid by the Customer, excluding any rental dues and
              damage charges. </p>
            <p style={{ marginTop: "2rem" }}>For extension of the term beyond the Agreement tenure by the Customer, the monthly rate applicable at the time of extension shall
              be followed for calculation of rental amount for the extension period. Any extension or early closure shall be done only through the
              Craving For Gaming helpline number and such extension or early closure shall be deemed to be pursuant to this Agreement. Craving
              For Gaming reserves the right to revise the rental rates any time at its sole discretion. </p>
            <h2>3. PAYMENT</h2>
            <p>The invoice shall be raised by Craving For Gaming on the starting date of the tenure and the due date for payment shall be the
              starting date of the tenure <strong>(“Due Date”)</strong>. Customer shall pay the rental charge as per the invoice raised and mailed to the
              Customer’s registered e-mail address. Payment made beyond the Due Date shall incur a late fee. Late fees shall be levied on the
              rental due amount only. The late fee of 10% shall be applied after 2 days of the starting date of the tenure on the pending
              amount.</p>
            <p style={{ marginTop: "2rem" }}>The Customer shall make all payments to Craving For Gaming only. Craving For Gaming shall not be liable for any payment made to
              any broker/third party by the Customer. Craving For Gaming reserves the right to share information with credit rating agencies
              pursuant to Clause 13 of this Agreement. The Customer hereby agrees that non-payment of rental dues, late fees, asset value leased
              and any other non-payment, may affect the credit rating of the Customer and Craving For Gaming shall not be liable for any claim
              from the Customer for sharing such information with credit rating agencies. In the event, the Customer does not make payments
              to Craving For Gaming or does not return the Products and is not traceable, in addition to any other right of Craving For Gaming, the
              Customer agrees that Craving For Gaming shall have the right to reach out to the Customer’s relatives, friends, employer, offices
              and shall inform them about the Customer’s default. The Customer here by agrees that, Craving For Gaming shall not be liable for
              any inconvenience or loss caused to the Customer for such action by Craving For Gaming. </p>
            <h2>4. SECURITY DEPOSIT </h2>
            <p>In addition to the monthly rental, the Customer shall pay a refundable security deposit <strong>(“Security Deposit”)</strong>. The Security Deposit shall
              not carry any interest for the entire tenure. The Security Deposit shall be refunded to the Customer on the termination and after
              taking delivery of all the Products from the possession of the Customer. Once the final quality check is performed on all the Products,
              and in case no damage is found, the Security Deposit shall be refunded within 2 working days to the Customer. Craving For Gaming
              shall refund the Security Deposit to the account from which initial the Security Deposit was paid by the Customer, in case the
              Customer wishes to get the refund to any other account, the Customer shall provide the details of the account to Craving For
              Gaming via-mail from the registered e-mail address of the Customer, prior to the pickup of the Products. The same account details
              shall be confirmed at the time of the reverse pick up of the Products.</p>
            <p style={{ marginTop: "2rem" }}>In case any damage is found in any Product, Craving For Gaming shall have the right to deduct the charges for the damages or
              monthly dues from the Security Deposit paid by the Customer and shall refund the remaining amount to the Customer. In case of
              default in the payment of tenure rentals (including late fee), Craving For Gaming shall have the right to deduct such rental dues from
              the Security Deposit and may at its sole discretion refund or forfeit the remaining balance of the Security Deposit. The Security Deposit
              shall not include any rent. The Customer cannot request for the invoice dues to be adjusted from the Security Deposit. </p>
            <h2>
              5. ORDER CONFIRMATION
            </h2>
            <p>On receipt of the order and the Security Deposit, Craving For Gaming shall confirm the order with the Customer by sending a
              confirmation (subject to successful verification of KYC) to the registered e-mail address of the Customer. In the event, any product
              selected by the Customer is unavailable, Craving For Gaming shall inform the same to the Customer. Craving For Gaming reserves
              the right to replace any product selected by the Customer in the event of unavailability.</p>
            <p style={{ marginTop: "2rem" }}>The Customer shall be provided with an option to either accept or deny such substitution at the time of confirming the order. Mere
              payment of the Security Deposit shall not be considered as the valid contract. In the event, the Customer does not accept the
              substitute Product, Craving For Gaming shall refund the Security Deposit paid by the Customer as per Clause 4 of this Agreement.</p>
            <p style={{ marginTop: "2rem" }}>The order raised by the Customer shall be processed subject to successful verification of the KYC and serviceability of the Customer
              location as per Craving For Gaming Policy. In case the KYC verification is not successful, or the location is not serviceable by Craving
              For Gaming, Craving For Gaming reserves the right to reject the Customer’s order any time prior to delivery, at its sole discretion
              without assigning any reason even after successful KYC or serviceability of the location. In the event the order is rejected by Craving
              For Gaming, the Security Deposit paid by the Customer shall be refunded to the Customer as per Clause 4 of this Agreement. The Customer authorizes Craving For Gaming to verify all the details provided by him/her and verify his/her credit score by
              evaluating their credit report with the help of any credit bureau and/or any other third party. </p>
            <h2>
              6. DELIVERY
            </h2>
            <p>On confirmation of the order by the Customer, Craving For Gaming shall deliver the Products to the location specified by the
              Customer. The Customer shall be present at the location at the time of delivery agreed between Craving For Gaming and the
              Customer. In case the Customer is not present or has not assigned a representative for taking delivery, at the location and a
              second delivery attempt is required, Craving For Gaming shall charge an extra delivery cost to the Customer.</p>
            <p style={{ marginTop: "2rem" }}> Craving For Gaming shall inspect the quality and ensure that the Products are working and in usable condition before the delivery
              of the Products to the Customer. The Customer shall inspect the Products for any damage and quality during the time of delivery. In
              case any Product is damaged during transit or unfit for use, Craving For Gaming shall replace the same at its own cost and in case a
              replacement is not required, such damage shall be noted in the delivery receipt and a photo of the same shall be taken for record.
              In case any claim of damage is brought against the Product after the acceptance of delivery by the Customer, Craving For Gaming
              shall not be responsible towards replacing the Product and shall levy a damage to be ascertained as per the damage policy below. </p>
            <h2>7. SERVICE </h2>
            <p>Craving For Gaming shall provide the service for the Product during the term of this Agreement. In case any service is required for the
              Product, the Customer shall raise the request for the service, however, Craving For Gaming shall try to resolve the issue over call, in
              case the same is not resolved, Craving For Gaming shall send its representative within 2-5 days from the date service request raised by
              the Customer to assess the service requirement of the Product, incase the issue cannot be resolved at the Customer Premises, Craving
              For Gaming representative shall pick up the Product from the Customer and shall deliver a temporary basic product to the
              Customer. As Craving For Gaming is not an authorized service provider of the Product manufacturer, Craving For Gaming shall
              submit the Product with the authorized service center of the manufacturer and shall inform the duration required for service to the
              Customer. Once the original Product is repaired, Craving For Gaming shall deliver the original Product to the Customer and shall collect
              the product from the Customer.</p>
            <p style={{ marginTop: "2rem" }}>The Customer shall be liable to pay for any quality assessment check (QC) cost incurred by Craving For Gaming or any service charges
              incurred by Craving For Gaming for the service. Incase of manufacturing defect, the Customer shall not be liable to pay the charges for
              such service. Any service arising out of damage as per clause 8, the Customer shall be liable to pay for such damage.</p>
            <p style={{ marginTop: "2rem" }}>In case the service is due to manufacturing defect, the Customer shall be charged the tenure rentals on a pro rata basis for the number
              of days the Product is used by the Customer. In case the service is due to the damage done by the Customer, then the Customer shall
              be liable to pay the tenure rentals for the entire duration the Product was in service. </p>
            <h2>8. DAMAGE /LOST</h2>
            <p>The Customer shall be liable to pay for any damage (including but not limited to dent, scratches, breakage, chipping, cracked display,
              jail break of device, exposure to liquid or dampness or moisture or sand, hardware and software tampering including jailbreak,
              rooting, unlocking boot ROM, bending of Product frame, modifications, unauthorized repairs, tampering of the Product serial
              number and malware installation or any other cause not arising due to manufacturing defect of the Product) of the Product, up to
              the existing market value of the Product, at the time of such damage.</p>
            <p style={{ marginTop: "2rem" }}> In case the product is lost (including but not limited to robbery, theft, misplacement) by the Customer, the Customer shall intimate
              Craving For Gaming immediately and the Customer shall either file a first information report (“FIR”) with the jurisdictional police
              station and share the copy with Craving For Gaming or shall assist Craving For Gaming in filing the FIR. The Customer shall be liable to
              pay a penalty amounting to the existing market value of the Product, at the time of such incident. </p>
            <h2>
              9. INSPECTION
            </h2>
            <p>Craving For Gaming reserves the right to inspect the Product delivered to the Customer during the final pickup of the Product at the
              end of the term or earlier termination (as the case maybe). The Customer shall co-operate with the Craving For Gaming to carry
              out the necessary quality checks of the Product at the time of pickup of the Product. Craving For Gaming shall provide a quality
              check report to the Customer, in case any damage is found to the Product at the time of reverse pickup, the Customer shall be
              liable to pay for such damage. The Customer hereby agrees that, in addition to doing the QC at the Customer’s premises, Craving
              For Gaming shall conduct a QC at its warehouse / service center and in case any additional damage is found, the same shall be
              informed to the Customer and shall be binding on the Customer. </p>
            <h2>
              10.DATA
            </h2>
            <p>The Customer is hereby informed that during service any data stored (including but not limited to contacts, images, videos, files,
              software and passwords) in the Product will be deleted and reformatted. Craving For Gaming shall not be responsible for any loss of
              software programs, data or other information contained on the Product. Further the Customer, shall be responsible for deleting and
              backing up any data stored on the Product before returning the Product to Craving For Gaming. In the event, Customer fails to
              delete the stored data or take back up of the data, Craving For Gaming shall delete all the data stored on the Product. The
              Customer hereby agrees that, Craving For Gaming shall not be liable for any loss of data stored on the Product or any economic
              consequential damages including lost profits. The Customer shall be responsible for removing any sim card, memory card,
              accessories in the Product before submitting it to Craving For Gaming representative.</p>
            <p style={{ marginTop: "2rem" }}>Craving For Gaming reserves the right to install software for tracking the location of the Product. The Customer hereby agrees to
              such installation of software in the Product. The Customer shall not uninstall or stop service of such software installed on the Product
              under any circumstances. However, in case the software is deleted due any update of firmware, the Customer shall immediately
              inform the same to Craving For Gaming. </p>
            <h2>11.TERMINATION </h2>
            <p>In the event, the Customer does not wish to extend the rental period beyond the Agreement date, the Agreement shall terminate on
              last day of the rental term.</p>
            <p style={{ marginTop: "2rem" }}>Craving For Gaming shall have the right to immediately terminate this Agreement in the following events:</p>
              <ol>
                <li>default of payment of rental dues or any other payment dues by the Customer; or</li>
                <li> breach of any of the terms of this Agreement. </li></ol>
            <h2>Consequences of termination: </h2>
            <p>Craving For Gaming shall have the right to take possession of the Products delivered to the Customer immediately;
              1. Any payment pending from the Customer shall become payable immediately to Craving For Gaming.
              2. The Security Deposit paid by the Customer shall be refunded to the Customer post the damage assessment of the Products, as
              per clause 4 and 8 of this Agreement. In the event, the Security Deposit is not sufficient to cover the damage to the Product,
              Customer shall be liable to pay additional amount for such damage.
              3. In case of termination due to non-payment of rental dues, the Security Deposit refund shall be determined subject to clause 4
              of this Agreement.
              Notwithstanding any other terms of this Agreement, Craving For Gaming shall have the right to terminate the Agreement without any
              cause by providing 30 days’ notice to the Customer. </p>
            <h2>12.OWNERSHIP OF PRODUCTS </h2>
            <p>Craving For Gaming shall at all times during the term of this Agreement, retain title to and/ or be the beneficial owners of the
              Products delivered to the Customer, pursuant to the Agreement. Nothing in this Agreement shall be construed as a transfer of
              ownership of the Products to the Customer. The Customer shall give immediate notice to Craving For Gaming if any of the Product
              is about to become liable or is threatened with seizure and the Customer shall indemnify Craving For Gaming against all loss and
              damage caused by such action against its Products. </p>
            <h2>
              13.ASSIGNMENT
            </h2>
            <p>The Customer shall not assign or transfer any interest in this Agreement or the Products without the written consent of Craving For
              Gaming. Anysuchtransferorassignmentshallbeconsideredasillegalandhenceaviolationofthetermsofthis Agreement. Craving For
              Gaming reserves the right to assign this Agreement, to any third party (including credit rating agencies, factoring agents and NBFC)
              without prior notice to the Customer. </p>
            <h2>14.INDEMNIFICATION </h2>
            <p>The Customer shall indemnify, defend and hold Craving For Gaming harmless from and against any claim, demand, cause of action
              or loss or liability (including, but not limited to, attorneys’ fees and costs) for any Product damage or personal injury arising from the
              Customer’s use of the Product by any cause, except to the extent such is caused by Craving For Gaming negligence or willful
              misconduct. The provisions of this clause shall survive the termination of this Agreement with respect to any claim or liability accruing
              before such termination. In no event shall Craving For Gaming be liable for any direct, indirect, special or consequential loss or
              damage arising out of Customer’s use of the Products. </p>
            <h2>15.GOVERNING LAW </h2>
            <p>This Agreement shall be governed by the laws of India and shall be subject to exclusive jurisdiction of courts in Delhi. </p>
            <h2>16.ENTIRE AGREEMENT </h2>
            <p>This Agreement (together with the Annexure) constitutes the entire agreement between Craving For Gaming and the Customer.
              The acceptance of this Agreement also signifies the acceptance of the Customer, to the terms and conditions on the Craving For
              Gaming website. In the event of any conflict between the terms and conditions on the Craving For Gaming website(including
              privacy policy) and this Agreement, the terms and conditions on the Craving For Gaming website shall supersede. The Company
              reserves the right to amend the terms and condition of this Agreement and on the website from time to time, the customer is
              requested to check the website for update of terms and conditions. </p>
            <h2>17. LIMITATION OF LIABILITY </h2>
            <p>In no event shall Craving For Gaming be liable for indirect, special, incidental, or consequential damages, or any loss of revenue,
              profits, or data of any kind in connection with use of the Products, even if it has been advised of the possibility of such damages.
              Notwithstanding any other provision of this Agreement Craving For Gaming’s total liability to Customer shall not exceed the total
              amount of 1 (one) month rental collected from the Customer. </p>
            <h2>DISCLAIMER </h2>
            <p>Craving For Gaming reserves the right to cancel any orders completely or partially before delivery without prior information. </p>
            <p>Any current/future orders placed by the Customer has no connection with any of his/her previous orders. </p>
            <p>Craving For Gaming shall provide the services under the Agreement, either by itself or through any third-party. Incase the services
              are provided through any third-party, Craving For Gaming shall share the details (only to the extent required to provide the
              services) of the Customer to enable such third-party to provide the service. The Customer hereby authorizes Craving For Gaming to
              share the details of the Customer with such third party</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tnc