const { subject } = require('@casl/ability');
const Invoice = require('../invoice/model');
const { policyFor } = require('../../utils');

const show = async(req, res, next) => {
    try {
        let {order_id} = req.params;
        let invoice =
        await Invoice
        .findOne({order: order_id})
        .populate('order')
        .populate('user');
        
        console.log(invoice);
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id});
        if (!policy.can('read', subjectInvoice)){
            return res.json({
                error: 1,
                message: 'Kamu tidak memiliki akses untuk melihat invoice ini!'
            });
        }
        

        return res.json(invoice);
    } catch (err) {
        console.log("invoice",err);
        return res.json({
            error: 1, 
            message: 'Error mengakses invoice',
        });
    }
}

module.exports = {
    show
}