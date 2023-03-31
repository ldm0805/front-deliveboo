import { Router } from 'express';
const router = Router();
import { BraintreeGateway, Environment } from 'braintree';

router.post('/', (req, res, next) => {
    const gateway = new BraintreeGateway({
        environment: Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: 'y7bkdpct43k678pk',
        publicKey: '3d2jtcpf98p8jq9b',
        privateKey: '815fadeace7ccbe16091fb9e2cc3423c'
    });

    // Use the payment method nonce here
    const nonceFromTheClient = req.body.paymentMethodNonce;
    // Create a new transaction for $10
    const newTransaction = gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonceFromTheClient,
        options: {
            // This option requests the funds from the transaction
            // once it has been authorized successfully
            submitForSettlement: true
        }
    }, (error, result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(error);
        }
    });
});

export default router;