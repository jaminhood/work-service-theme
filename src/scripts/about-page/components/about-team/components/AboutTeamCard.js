const AboutTeamCard = ({ team }) => {
 return (
  <div className="shadow-md bg-zinc-50 text-main-primary">
   <div className="w-full overflow-hidden h-80">
    <img src={team.team_img} className="object-cover w-full h-full" />
   </div>
   <div className="px-4 py-8">
    <h4 className="text-lg font-sansation-bold">{team.team_name}</h4>
    <h6 className="text-sm font-jost-regular">{team.team_role}</h6>
    <p className="pt-4 text-sm font-jost-regular opacity-70">{team.team_desc}</p>
   </div>
  </div>
 )
}

export default AboutTeamCard
