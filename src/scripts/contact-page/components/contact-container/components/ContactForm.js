import Button from "../../../../shared/button"

const ContactForm = () => {
 return (
  <div className="col-span-1 p-8 text-center shadow-sm rounded-xl md:col-span-2 text-main-primary bg-zinc-200 md:text-left">
   <h2 className="text-2xl capitalize font-sansation-bold">Send Message</h2>
   <p className="text-base font-jost-regular">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
   <div className="grid gap-4 pt-4 md:grid-cols-2">
    <div>
     <input type="text" placeholder="Your Name." className="w-full px-4 py-2 bg-transparent border rounded-md border-main-primary focus:outline-0" />
    </div>
    <div>
     <input type="email" placeholder="Your E-mail." className="w-full px-4 py-2 bg-transparent border rounded-md border-main-primary focus:outline-0" />
    </div>
   </div>
   <div className="grid gap-4 pt-4 md:grid-cols-2">
    <div>
     <input type="text" placeholder="Phone Number." className="w-full px-4 py-2 bg-transparent border rounded-md border-main-primary focus:outline-0" />
    </div>
    <div>
     <input type="email" placeholder="Subject." className="w-full px-4 py-2 bg-transparent border rounded-md border-main-primary focus:outline-0" />
    </div>
   </div>
   <div className="grid grid-cols-1 gap-4 pt-4">
    <div>
     <textarea placeholder="Message." className="w-full px-4 py-2 bg-transparent border rounded-md resize-none border-main-primary focus:outline-0"></textarea>
    </div>
   </div>
   <div className="grid grid-cols-1 gap-4 mt-4">
    <div className="overflow-hidden border rounded-xl border-main-primary">
     <Button content="Send Message." size="l" />
    </div>
   </div>
  </div>
 )
}

export default ContactForm
